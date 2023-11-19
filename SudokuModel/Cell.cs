namespace SudokuModel
{
    public class Cell
    {
        public Coordinates Coordinates { get; }
        public Cell(byte index, byte value)
        {
            if (index < 0 || index > 81)
                throw new ArgumentException($"{index} cell index is not supported");
            if (value < 0 || value > 9)
                throw new ArgumentException($"{value} value index is not supported");
            Coordinates = new Coordinates(index);
            Value = value;
        }

        public bool Answered => Value != 0;

        private byte value;
        public byte Value
        {
            get => value;
            set
            {
                this.value = value;
                ValueUpdated?.Invoke(this, this);
            }
        }

        internal event EventHandler<Cell> ValueUpdated;

        private readonly byte[] suggestions = { 0, 0, 0, 0, 0, 0, 0, 0, 0 };
        public byte[] GetSuggestions()
        {
            if (Answered)
                return new byte[0];
            byte[] realSuggestions = suggestions.Where(s => s != 0).ToArray();
            byte[] copy = new byte[realSuggestions.Length];
            Array.Copy(realSuggestions, copy, realSuggestions.Length);
            return copy;
        }
        internal void AddSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {Coordinates.X},{Coordinates.Y}");
            suggestions[suggestedNumber - 1] = suggestedNumber;
        }
        internal void RemoveSuggestion(byte suggestedNumber)
        {
            if (suggestedNumber < 1 || suggestedNumber > 9)
                throw new ArgumentException($"suggested number is out of range, cell {Coordinates.X},{Coordinates.Y}");
            suggestions[suggestedNumber - 1] = 0;
        }

        internal Cell Copy()
        {
            var copy = new Cell(Coordinates.Index, Value);
            Array.ForEach(suggestions, s => { if (s != 0) copy.AddSuggestion(s); });
            return copy;
        }

        public override string ToString() => $"({Coordinates.X}, {Coordinates.Y})";
    }
}