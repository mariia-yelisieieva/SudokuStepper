using SudokuModel;

namespace SudokuStepper.Steps
{
    public abstract class ObviousCombinationsStep : IStep
    {
        public string Name { get; }

        protected abstract byte ObviousNumbersAmount { get; }

        public bool MakeChange(Grid grid)
        {
            bool changed = false;
            Cell[] selectedPossibleValues = grid.Cells.Where(cell => cell.GetSuggestions().Length == ObviousNumbersAmount).ToArray();
            foreach (Cell cell in selectedPossibleValues)
            {
                byte[] suggestions = cell.GetSuggestions();

                Cell[] vertical = grid.GetCells(cell.Coordinates.AdjacentColumnIndices).Where(c => !c.Answered).ToArray();
                changed |= RemoveSuggestionsForOnlyPossible(grid, suggestions, vertical);

                Cell[] horizontal = grid.GetCells(cell.Coordinates.AdjacentRowIndices).Where(c => !c.Answered).ToArray();
                changed |= RemoveSuggestionsForOnlyPossible(grid, suggestions, horizontal);

                Cell[] square = grid.GetCells(cell.Coordinates.AdjacentSquareIndices).Where(c => !c.Answered).ToArray();
                changed |= RemoveSuggestionsForOnlyPossible(grid, suggestions, square);
            }
            return changed;
        }

        private bool RemoveSuggestionsForOnlyPossible(Grid grid, byte[] suggestions, Cell[] group)
        {
            bool changed = false;
            Cell[] onlyPossibleCells = group.Where(cell => !cell.Answered && !cell.GetSuggestions().Except(suggestions).Any()).ToArray();
            if (onlyPossibleCells.Length == ObviousNumbersAmount - 1)
            {
                foreach (Cell groupCell in group)
                {
                    var groupCellSuggestions = groupCell.GetSuggestions();
                    if (groupCellSuggestions.Intersect(suggestions).Any() && groupCellSuggestions.Except(suggestions).Any())
                    {
                        changed = true;
                        grid.RemoveSuggestion(groupCell.Coordinates.Index, suggestions);
                    }
                }
            }
            return changed;
        }
    }
}
