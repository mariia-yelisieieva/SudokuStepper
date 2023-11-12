namespace SudokuModel
{
    internal class Cell
    {
        private readonly byte X;
        private readonly byte Y;
        public Cell(byte x, byte y)
        {
            if (x < 0 || x > 8)
                throw new ArgumentException($"{x} coordinate is not supported");
            if (y < 0 || y > 8)
                throw new ArgumentException($"{y} coordinate is not supported");
            X = x;
            Y = y;
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

        private readonly byte[] suggestions = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        public byte[] GetSuggestions()
        {
            byte[] copy = new byte[9];
            Array.Copy(suggestions, copy, suggestions.Length);
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
            suggestions[suggestedNumber - 1] = suggestedNumber;
        }
    }
}