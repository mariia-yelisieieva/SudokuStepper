using SudokuModel;

namespace SudokuStepper.Steps
{
    public class LastPossibleStep : IStep
    {
        public string Name { get; }

        public bool MakeChange(Grid grid)
        {
            bool updated = false;
            updated |= FillOnlyPossibleInColumns(grid);
            updated |= FillOnlyPossibleInRows(grid);
            updated |= FillOnlyPossibleInSquares(grid);
            return updated;
        }

        private bool FillOnlyPossibleInColumns(Grid grid)
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] columnIndices = Indices.GetColumnIndices(i);
                updated |= FillOnlyPossible(grid, columnIndices);
            }
            return updated;
        }

        private bool FillOnlyPossibleInRows(Grid grid)
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] rowIndices = Indices.GetRowIndices(i);
                updated |= FillOnlyPossible(grid, rowIndices);
            }
            return updated;
        }

        private bool FillOnlyPossibleInSquares(Grid grid)
        {
            bool updated = false;
            for (byte i = 0; i < 9; i++)
            {
                byte[] squareIndices = Indices.GetSquareIndices(i);
                updated |= FillOnlyPossible(grid, squareIndices);
            }
            return updated;
        }

        private bool FillOnlyPossible(Grid grid, byte[] columnIndices)
        {
            bool updated = false;
            var cells = grid.GetCells(columnIndices);
            for (byte suggestion = 1; suggestion < 10; suggestion++)
            {
                List<byte> cellIndices = cells.Where(cell => !cell.Answered && cell.GetSuggestions().Contains(suggestion)).Select(cell => cell.Coordinates.Index).ToList();
                if (cellIndices.Count == 1 && !grid.Cells[cellIndices[0]].Answered && grid.Cells[cellIndices[0]].Value != suggestion)
                {
                    grid.Cells[cellIndices[0]].Value = suggestion;
                    updated = true;
                }
            }
            return updated;
        }
    }
}
