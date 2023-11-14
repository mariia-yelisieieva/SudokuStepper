namespace SudokuModel
{
    public static class Indices
    {
        public static byte[] GetColumnIndices(byte column) => new[]
        {
            (byte)(0 + column),
            (byte)(9 + column),
            (byte)(18 + column),
            (byte)(27 + column),
            (byte)(36 + column),
            (byte)(45 + column),
            (byte)(54 + column),
            (byte)(63 + column),
            (byte)(72 + column)
        };

        public static byte[] GetRowIndices(byte row)
        {
            row = (byte)(row * 9);
            return new[]
            {
                (byte)(row + 0),
                (byte)(row + 1),
                (byte)(row + 2),
                (byte)(row + 3),
                (byte)(row + 4),
                (byte)(row + 5),
                (byte)(row + 6),
                (byte)(row + 7),
                (byte)(row + 8)
            };
        }

        public static byte[] GetSquareIndices(byte square)
        {
            byte[][] squares = new byte[][]
            {
                new byte[] { 0, 1, 2, 9, 10, 11, 18, 19, 20 },
                new byte[] { 3, 4, 5, 12, 13, 14, 21, 22, 23 },
                new byte[] { 6, 7, 8, 15, 16, 17, 24, 25, 26 },
                new byte[] { 27, 28, 29, 36, 37, 38, 45, 46, 47 },
                new byte[] { 30, 31, 32, 39, 40, 41, 48, 49, 50 },
                new byte[] { 33, 34, 35, 42, 43, 44, 51, 52, 53 },
                new byte[] { 54, 55, 56, 63, 64, 65, 72, 73, 74 },
                new byte[] { 57, 58, 59, 66, 67, 68, 75, 76, 77 },
                new byte[] { 60, 61, 62, 69, 70, 71, 78, 79, 80 },
            };
            return squares[square];
        }

        public static List<byte> GetAdjacentColumnIndices(byte currentIndex)
        {
            var result = new List<byte>();

            byte i = (byte)(currentIndex % 9);
            while (i < 80)
            {
                result.Add(i);
                i += 9;
            }
            result.RemoveAll(num => num == currentIndex);
            return result;
        }

        public static List<byte> GetAdjacentRowIndices(byte currentIndex)
        {
            var result = new List<byte>();

            byte i = (byte)(currentIndex / 9);
            for (byte t = 0; t < 9; t++)
                result.Add((byte)(i * 9 + t));
            result.RemoveAll(num => num == currentIndex);
            return result;
        }

        public static List<byte> GetAdjacentSquareIndices(byte currentIndex)
        {
            var result = new List<byte>();

            byte y = (byte)(currentIndex / 27);
            byte x = (byte)(currentIndex % 9 / 3);
            byte firstSquareIndex = (byte)(y * 27 + x * 3);
            result.Add(firstSquareIndex);
            result.Add((byte)(firstSquareIndex + 1));
            result.Add((byte)(firstSquareIndex + 2));
            result.Add((byte)(firstSquareIndex + 9));
            result.Add((byte)(firstSquareIndex + 10));
            result.Add((byte)(firstSquareIndex + 11));
            result.Add((byte)(firstSquareIndex + 18));
            result.Add((byte)(firstSquareIndex + 19));
            result.Add((byte)(firstSquareIndex + 20));
            result.RemoveAll(num => num == currentIndex);
            return result;
        }

        public static List<byte> GetAdjacentIndices(byte currentIndex)
        {
            var result = GetAdjacentColumnIndices(currentIndex);
            result.AddRange(GetAdjacentRowIndices(currentIndex));
            result.AddRange(GetAdjacentSquareIndices(currentIndex));
            return result.Distinct().OrderBy(x => x).ToList();
        }
    }
}
