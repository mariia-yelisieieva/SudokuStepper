namespace SudokuModel
{
    internal class Cell
    {
        private readonly byte X;
        private readonly byte Y;
        public byte Index { get; }
        public byte[] AdjacentIndices { get; }
        public Cell(byte i)
        {
            if (i < 0 || i > 81)
                throw new ArgumentException($"{i} cell index is not supported");
            X = (byte)(i / 9);
            Y = (byte)(i % 9);
            Index = i;
            AdjacentIndices = Indices.GetAdjacentIndices(i);
            Answered = false;
        }

        public bool Answered { get; set; } = false;
        private byte value = 0;
        public byte Value
        {
            get => value;
            set
            {
                Answered = true; 
                this.value = value;
            }
        }

        public readonly byte[] Suggestions = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        public byte[] GetSuggestions()
        {
            byte[] copy = new byte[9];
            Array.Copy(Suggestions, copy, Suggestions.Length);
            return copy;
        }
        public void AddSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {X},{Y}");
            Suggestions[suggestedNumber - 1] = suggestedNumber;
        }
        public void RemoveSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {X},{Y}");
            Suggestions[suggestedNumber - 1] = 0;
        }

        public Cell Copy()
        {
            var copy = new Cell(Index)
            {
                Answered = Answered,
                Value = Value
            };
            foreach (byte suggestion in Suggestions)
                copy.AddSuggestion(suggestion);
            return copy;
        }
    }
}