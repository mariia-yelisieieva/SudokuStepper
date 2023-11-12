namespace SudokuModel
{
    public static class Indices
    {
        private static Dictionary<byte, byte[]> adjacentIndices = new();

        public static byte[] GetAdjacentIndices(byte currentIndex)
        {
            if (adjacentIndices.TryGetValue(currentIndex, out var adjacent))
                return adjacent;
            
            var result = new List<byte>();

            byte column = (byte)(currentIndex % 9);
            byte row = (byte)(currentIndex / 9 * 9);

            // add vertical row
            byte i = column;
            while (i < 80)
            {
                result.Add(i);
                i += 9;
            }

            // add horizontal row
            i = row;
            for (byte t = 0; t < 9; t++)
                result.Add(t);

            // add square
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

            var qwe = result.Distinct().OrderBy(x => x).ToArray();
            adjacentIndices.Add(currentIndex, qwe);
            return qwe;
        }
    }
}
