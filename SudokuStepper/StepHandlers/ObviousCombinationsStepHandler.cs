using SudokuModel;

namespace SudokuStepper.Steps
{
    public abstract class ObviousCombinationsStepHandler : IStepHandler
    {
        public string Name => $"Obvious combination of {ObviousNumbersAmount}";

        public string GetComment() => $"The \"{Name}\" step: " + 
            (!UpdatedCells.Any() ? "nothing was updated" : $"cells {string.Join(", ", UpdatedCells)} are the only ones to have {string.Join(", ", Suggestions)} in one of their groups");

        private List<Cell> UpdatedCells { get; } = new();
        private byte[] Suggestions { get; set; }

        protected abstract byte ObviousNumbersAmount { get; }

        public bool MakeChange(Grid grid)
        {
            //
            // TODO: Redo the algorithm to include "1,2", "2,3", "1,3" combination, not just "1,2,3", "1,2", "1,3"
            //
            UpdatedCells.Clear();
            bool changed = false;
            Cell[] selectedPossibleValues = grid.Cells.Where(cell => cell.GetSuggestions().Length == ObviousNumbersAmount).ToArray();
            foreach (Cell cell in selectedPossibleValues)
            {
                byte[] suggestions = cell.GetSuggestions();

                Cell[] vertical = grid.GetCells(cell.Coordinates.AdjacentColumnIndices).Where(c => !c.Answered).ToArray();
                if (RemoveSuggestionsForOnlyPossible(grid, suggestions, vertical))
                {
                    UpdatedCells.Add(cell);
                    return true;
                }

                Cell[] horizontal = grid.GetCells(cell.Coordinates.AdjacentRowIndices).Where(c => !c.Answered).ToArray();
                if (RemoveSuggestionsForOnlyPossible(grid, suggestions, horizontal))
                {
                    UpdatedCells.Add(cell);
                    return true;
                }

                Cell[] square = grid.GetCells(cell.Coordinates.AdjacentSquareIndices).Where(c => !c.Answered).ToArray();
                if (RemoveSuggestionsForOnlyPossible(grid, suggestions, square))
                {
                    UpdatedCells.Add(cell);
                    return true;
                }
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
            if (changed)
            {
                UpdatedCells.AddRange(onlyPossibleCells);
                Suggestions = suggestions;
            }
            return changed;
        }
    }
}
