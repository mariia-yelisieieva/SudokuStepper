namespace SudokuModel
{
    internal class Cell
    {
        public Coordinates Coordinates { get; }
        public Cell(byte index)
        {
            if (index < 0 || index > 81)
                throw new ArgumentException($"{index} cell index is not supported");
            Coordinates = new Coordinates(index);
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
                throw new ArgumentException($"suggested number is out of range, cell {Coordinates.X},{Coordinates.Y}");
            suggestions[suggestedNumber - 1] = suggestedNumber;
        }
        public void RemoveSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {Coordinates.X},{Coordinates.Y}");
            suggestions[suggestedNumber - 1] = 0;
        }

        public Cell Copy()
        {
            var copy = new Cell(Coordinates.Index)
            {
                Value = Value
            };
            return copy;
        }
    }
}