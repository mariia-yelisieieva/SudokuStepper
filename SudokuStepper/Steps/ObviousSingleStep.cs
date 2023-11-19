using SudokuModel;

namespace SudokuStepper.Steps
{
    public class ObviousSingleStep : IStep
    {
        public string Name { get; }

        public bool MakeChange(Grid grid)
        {
            bool updated = false;
            foreach (Cell cell in grid.Cells)
            {
                if (cell.GetSuggestions().Count(x => x != 0) != 1)
                    continue;
                cell.Value = cell.GetSuggestions().SingleOrDefault(x => x != 0);
                updated = true;
            }
            return updated;
        }
    }
}
