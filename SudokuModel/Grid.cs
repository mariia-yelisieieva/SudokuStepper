namespace SudokuModel
{
    public class Grid : IDisposable
    {
        internal readonly Cell[] Cells = new Cell[81];
        public Grid(params byte[] cellValues)
        {
            if (cellValues.Length != 81)
                throw new ArgumentException();

            for (byte i = 0; i < 81; i++)
            {
                Cells[i] = new Cell(i);
                Cells[i].ValueUpdated += Grid_CellValueUpdated;
            }

            for (int i = 0; i < cellValues.Length; i++)
            {
                if (cellValues[i] == 0)
                    continue;
                Cells[i].Value = cellValues[i];
            }
            RefreshSuggestions();
        }

        public bool IsAllAnswered => !Cells.Any(cell => !cell.Answered);

        private void Grid_CellValueUpdated(object? sender, Cell cell)
        {
            RefreshSuggestions();
        }

        private void RefreshSuggestions()
        {
            for (byte i = 0; i < Cells.Length; i++)
            {
                AddSuggestion(i, new byte[] { 1, 2, 3, 4, 5, 6, 7, 8, 9});
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

        private Cell[] GetCells(byte[] indices)
        {
            Cell[] result = new Cell[indices.Length];
            for (int i = 0; i < indices.Length; i++)
            {
                result[i] = Cells[indices[i]];
            }
            return result.ToArray();
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

        public bool FillSingleSuggestionCells()
        {
            bool updated = false;
            foreach (Cell cell in Cells)
            {
                if (cell.GetSuggestions().Count(x => x != 0) != 1)
                    continue;
                cell.Value = cell.GetSuggestions().SingleOrDefault(x => x != 0);
                updated = true;
            }
            return updated;
        }

        public Grid Copy()
        {
            var copy = new Grid(Cells.Select(c => c.Value).ToArray());
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

        public bool FillOnlyPossible()
        {
            bool updated = false;
            updated |= FillOnlyPossibleInColumns();
            updated |= FillOnlyPossibleInRows();
            updated |= FillOnlyPossibleInSquares();
            return updated;
        }

        private bool FillOnlyPossibleInColumns()
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] columnIndices = Indices.GetColumnIndices(i);
                updated |= FillOnlyPossible(columnIndices);
            }
            return updated;
        }

        private bool FillOnlyPossibleInRows()
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] rowIndices = Indices.GetRowIndices(i);
                updated |= FillOnlyPossible(rowIndices);
            }
            return updated;
        }

        private bool FillOnlyPossibleInSquares()
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] squareIndices = Indices.GetSquareIndices(i);
                updated |= FillOnlyPossible(squareIndices);
            }
            return updated;
        }

        private bool FillOnlyPossible(byte[] columnIndices)
        {
            bool updated = false;
            var cells = GetCells(columnIndices);
            for (byte suggestion = 1; suggestion < 10; suggestion++)
            {
                List<byte> cellIndices = cells.Where(cell => !cell.Answered && cell.GetSuggestions().Contains(suggestion)).Select(cell => cell.Coordinates.Index).ToList();
                if (cellIndices.Count == 1 && !Cells[cellIndices[0]].Answered && Cells[cellIndices[0]].Value != suggestion)
                {
                    Cells[cellIndices[0]].Value = suggestion;
                    updated = true;
                }
            }
            return updated;
        }

        void IDisposable.Dispose()
        {
            foreach (Cell cell in Cells)
                cell.ValueUpdated -= Grid_CellValueUpdated;
        }
    }
}
