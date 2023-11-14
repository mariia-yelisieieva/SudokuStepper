namespace SudokuModel
{
    public static class Indices
    {
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
