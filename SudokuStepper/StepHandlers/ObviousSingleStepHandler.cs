using SudokuModel;

namespace SudokuStepper.Steps
{
    public class ObviousSingleStepHandler : IStepHandler
    {
        public string Name => "Obvious single";

        public string GetComment() => $"The \"{Name}\" step: " + (UpdatedCell is null ? "nothing was updated" : $"cell {UpdatedCell} value is set to {UpdatedCell.Value}");

        private Cell UpdatedCell { get; set; }

        public bool MakeChange(Grid grid)
        {
            foreach (Cell cell in grid.Cells)
            {
                if (cell.GetSuggestions().Count(x => x != 0) != 1)
                    continue;
                cell.Value = cell.GetSuggestions().SingleOrDefault(x => x != 0);
                UpdatedCell = cell;
                return true;
            }
            return false;
        }
    }
}
