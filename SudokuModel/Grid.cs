namespace SudokuModel
{
    public class Grid
    {
        internal readonly Cell[] Cells = new Cell[81];

        private readonly byte[] cellValues;
        public Grid(params byte[] cellValues)
        {
            if (cellValues.Length != 81)
                throw new ArgumentException();
            this.cellValues = cellValues;

            for (byte i = 0; i < 81; i++)
                Cells[i] = new Cell(i);
            
            for (int i = 0; i < cellValues.Length; i++)
            {
                if (cellValues[i] == 0)
                    continue;
                Cells[i].Value = cellValues[i];
            }
            RefreshSuggestions();
        }

        public void Answer(byte x, byte y, byte value)
        {
            if (x < 0 || x > 8)
                throw new ArgumentException($"{x} coordinate is not supported");
            if (y < 0 || y > 8)
                throw new ArgumentException($"{y} coordinate is not supported");
            if (value < 1 || value > 9)
                throw new ArgumentException($"{value} value is not supported");

            Cells[y * 9 + x].Value = value;
        }

        private void RefreshSuggestions()
        {
            for (byte i = 0; i < Cells.Length; i++)
            {
                AddSuggestion(i, new byte[] { 1, 2, 3, 4, 5, 6, 7, 8, 9});
                byte[] adjacentIndices = Cells[i].AdjacentIndices;
                byte[] adjacentValues = Cells.Where(cell => adjacentIndices.Contains(cell.Index)).Select(cell => cell.Value)
                    .Where(value => value != 0).Distinct().OrderBy(value => value).ToArray();
                RemoveSuggestion(i, adjacentValues);
            }
        }

        private void AddSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].AddSuggestion(value);
        }

        private void RemoveSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].RemoveSuggestion(value);
        }

        public void FillOneSuggestionCells()
        {
            foreach (Cell cell in Cells)
            {
                if (cell.GetSuggestions().Count(x => x != 0) == 1)
                    cell.Value = cell.GetSuggestions().SingleOrDefault(x => x != 0);
            }
        }

        public Grid Copy()
        {
            var copy = new Grid(Cells.Select(c => c.Value).ToArray());
            return copy;
        }

        public string GetCellValue(byte i, byte j)
        {
            byte value = Cells[i * 9 + j].Value;
            if (value == 0)
                return "_";
            return value.ToString();
        }
    }
}
