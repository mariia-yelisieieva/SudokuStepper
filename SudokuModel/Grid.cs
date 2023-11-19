namespace SudokuModel
{
    public class Grid : IDisposable
    {
        public Cell[] Cells { get; } = new Cell[81];
        public Grid(params byte[] cellValues)
        {
            if (cellValues.Length != 81)
                throw new ArgumentException();

            for (byte i = 0; i < cellValues.Length; i++)
            {
                Cells[i] = new Cell(i, cellValues[i]);
                Cells[i].ValueUpdated += Grid_CellValueUpdated;
            }
        }

        private Grid(Cell[] cells)
        {
            Cells = cells;

            for (byte i = 0; i < cells.Length; i++)
                Cells[i].ValueUpdated += Grid_CellValueUpdated;
        }

        public bool IsAllAnswered => !Cells.Any(cell => !cell.Answered);

        private void Grid_CellValueUpdated(object? sender, Cell cell)
        {
            RemoveAnsweredSuggestions(cell.Coordinates.AdjacentIndices);
        }

        public void RemoveAnsweredSuggestions()
        {
            byte[] indices = Enumerable.Range(0, 81).Select(i => (byte)i).ToArray();

            for (byte index = 0; index < indices.Length; index++)
                AddSuggestion(indices[index], new byte[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });
            RemoveAnsweredSuggestions(indices);
        }

        private void RemoveAnsweredSuggestions(byte[] indices = null)
        {
            for (byte index = 0; index < indices.Length; index++)
            {
                byte i = indices[index];
                byte[] adjacentValues = GetCellValues(Cells[i].Coordinates.AdjacentIndices);
                RemoveSuggestion(i, adjacentValues);
            }
        }

        private byte[] GetCellValues(byte[] indices)
        {
            List<byte> result = new();
            for (int i = 0; i < indices.Length; i++)
            {
                byte value = Cells[indices[i]].Value;
                if (value != 0)
                    result.Add(value);
            }
            return result.Distinct().OrderBy(value => value).ToArray();
        }

        public Cell[] GetCells(byte[] indices)
        {
            Cell[] result = new Cell[indices.Length];
            for (int i = 0; i < indices.Length; i++)
            {
                result[i] = Cells[indices[i]];
            }
            return result.ToArray();
        }

        public void AddSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].AddSuggestion(value);
        }

        public void RemoveSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].RemoveSuggestion(value);
        }

        public Grid Copy()
        {
            var copy = new Grid(Cells.Select(c => c.Copy()).ToArray());
            return copy;
        }

        public string GetCellValueSymbol(byte i, byte j)
        {
            byte value = Cells[i * 9 + j].Value;
            if (value == 0)
                return "_";
            return value.ToString();
        }

        public string[] GetCellSuggestionsSymbols(byte i, byte j)
        {
            List<string> result = new();
            byte[] suggestions = Cells[i * 9 + j].GetSuggestions();
            for (int index = 0; index < 9; index++)
            {
                bool hasSuggestion = suggestions.Any(x => x == index + 1);
                if (hasSuggestion)
                    result.Add((index + 1).ToString());
                else
                    result.Add("_");
            }
            return result.ToArray();
        }

        public void Dispose()
        {
            foreach (Cell cell in Cells)
                cell.ValueUpdated -= Grid_CellValueUpdated;
        }
    }
}
