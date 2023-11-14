namespace SudokuModel
{
    public readonly struct Coordinates
    {
        public readonly byte X;
        public readonly byte Y;
        public readonly byte Index;

        public byte[] AdjacentColumnIndices { get; }
        public byte[] AdjacentRowIndices { get; }
        public byte[] AdjacentSquareIndices { get; }
        public byte[] AdjacentIndices { get; }

        public Coordinates(byte index)
        {
            if (index < 0 || index > 81)
                throw new ArgumentException($"{index} cell index is not supported");

            X = (byte)(index / 9);
            Y = (byte)(index % 9);
            Index = index;

            AdjacentColumnIndices = Indices.GetAdjacentColumnIndices(index).ToArray();
            AdjacentRowIndices = Indices.GetAdjacentRowIndices(index).ToArray();
            AdjacentSquareIndices = Indices.GetAdjacentSquareIndices(index).ToArray();
            AdjacentIndices = Indices.GetAdjacentIndices(index).ToArray();
        }
    }
}
