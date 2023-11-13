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
        }

        public bool Answered => Value != 0;
        public byte Value { get; set; } = 0;

        private readonly byte[] suggestions = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        public byte[] GetSuggestions()
        {
            if (Answered)
                return new byte[0];
            byte[] realSuggestions = suggestions.Where(s => s != 0).ToArray();
            byte[] copy = new byte[realSuggestions.Length];
            Array.Copy(realSuggestions, copy, realSuggestions.Length);
            return copy;
        }
        public void AddSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {X},{Y}");
            suggestions[suggestedNumber - 1] = suggestedNumber;
        }
        public void RemoveSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {X},{Y}");
            suggestions[suggestedNumber - 1] = 0;
        }

        public Cell Copy()
        {
            var copy = new Cell(Index)
            {
                Value = Value
            };
            //foreach (byte suggestion in GetSuggestions())
            //    copy.AddSuggestion(suggestion);
            return copy;
        }
    }
}