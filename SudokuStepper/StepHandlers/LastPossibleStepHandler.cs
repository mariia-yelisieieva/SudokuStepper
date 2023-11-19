using SudokuModel;

namespace SudokuStepper.Steps
{
    public class LastPossibleStepHandler : IStepHandler
    {
        public string Name => "Last possible";

        public string GetComment() => $"The \"{Name}\" step: " + (UpdatedCell is null ? "nothing was updated" : $"cell {UpdatedCell} value is set to {UpdatedCell.Value}");

        private Cell UpdatedCell { get; set; }

        public bool MakeChange(Grid grid)
        {
            if (FillOnlyPossibleInColumns(grid))
                return true;
            if (FillOnlyPossibleInRows(grid))
                return true;
            if (FillOnlyPossibleInSquares(grid))
                return true;
            return false;
        }

        private bool FillOnlyPossibleInColumns(Grid grid)
        {
            for (byte i = 0; i < 9; i++)
            {
                byte[] columnIndices = Indices.GetColumnIndices(i);
                if (FillOnlyPossible(grid, columnIndices))
                    return true;
            }
            return false;
        }

        private bool FillOnlyPossibleInRows(Grid grid)
        {
            for (byte i = 0; i < 9; i++)
            {
                byte[] rowIndices = Indices.GetRowIndices(i);
                if (FillOnlyPossible(grid, rowIndices))
                    return true;
            }
            return false;
        }

        private bool FillOnlyPossibleInSquares(Grid grid)
        {
            for (byte i = 0; i < 9; i++)
            {
                byte[] squareIndices = Indices.GetSquareIndices(i);
                if (FillOnlyPossible(grid, squareIndices))
                    return true;
            }
            return false;
        }

        private bool FillOnlyPossible(Grid grid, byte[] columnIndices)
        {
            var cells = grid.GetCells(columnIndices);
            for (byte suggestion = 1; suggestion < 10; suggestion++)
            {
                List<byte> cellIndices = cells.Where(cell => !cell.Answered && cell.GetSuggestions().Contains(suggestion)).Select(cell => cell.Coordinates.Index).ToList();
                if (cellIndices.Count == 1 && !grid.Cells[cellIndices[0]].Answered && grid.Cells[cellIndices[0]].Value != suggestion)
                {
                    grid.Cells[cellIndices[0]].Value = suggestion;
                    UpdatedCell = grid.Cells[cellIndices[0]];
                    return true;
                }
            }
            return false;
        }
    }
}
