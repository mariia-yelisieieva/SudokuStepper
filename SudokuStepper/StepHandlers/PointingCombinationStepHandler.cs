using SudokuModel;
using SudokuStepper.Steps;

namespace SudokuStepper.StepHandlers
{
    public class PointingCombinationStepHandler : IStepHandler
    {
        public string Name => "Pointing combination";

        public string GetComment() => $"The \"{Name}\" step: " + 
            (RemovedSuggestion == 0 ? "nothing was updated" : $"value {RemovedSuggestion} in square {SquareIndex} can be the only one in their {Group}");

        private byte SquareIndex;
        private byte RemovedSuggestion = 0;
        private string Group;

        public bool MakeChange(Grid grid)
        {
            for (SquareIndex = 0; SquareIndex < 9; SquareIndex++)
            {
                Cell[] squareCells = grid.GetCells(Indices.GetSquareIndices(SquareIndex));
                byte[] squareCellsValues = squareCells.Where(cell => cell.Value != 0).Select(cell => cell.Value).ToArray();
                for (byte suggestedValue = 1; suggestedValue < 10; suggestedValue++)
                {
                    if (squareCellsValues.Contains(suggestedValue))
                        continue;
                    byte[] valueIndices = squareCells.Where(cell => cell.GetSuggestions().Contains(suggestedValue)).Select(cell => cell.Coordinates.Index).ToArray();

                    bool updated = RemoveSuggestionsInRows(grid, suggestedValue, valueIndices);
                    if (updated)
                        return true;
                    updated = RemoveSuggestionsInColumns(grid, suggestedValue, valueIndices);
                    if (updated)
                        return true;
                }
            }
            return false;
        }

        private bool RemoveSuggestionsInRows(Grid grid, byte suggestedValue, byte[] valueIndices)
        {
            byte baseIndex = (byte)(valueIndices[0] - valueIndices[0] % 3);
            if (valueIndices.All(index => index == baseIndex || index == baseIndex + 1 || index == baseIndex + 2))
            {
                byte rowIndex = (byte)(baseIndex / 9);
                byte[] indices = Indices.GetRowIndices(rowIndex);
                bool updated = FindAndRemoveSuggestionsInIndexGroup(indices, grid, suggestedValue, valueIndices);
                if (updated)
                {
                    Group = "row";
                    return true;
                }
            }
            return false;
        }

        private bool RemoveSuggestionsInColumns(Grid grid, byte suggestedValue, byte[] valueIndices)
        {
            byte baseIndex = (byte)(valueIndices[0] - (valueIndices[0] / 9) * 9);
            if (valueIndices.All(index => index == baseIndex || index == baseIndex + 9 || index == baseIndex + 18))
            {
                byte columnIndex = (byte)(baseIndex % 9);
                byte[] indices = Indices.GetColumnIndices(columnIndex);
                bool updated = FindAndRemoveSuggestionsInIndexGroup(indices, grid, suggestedValue, valueIndices);
                if (updated)
                {
                    Group = "column";
                    return true;
                }
            }
            return false;
        }

        private bool FindAndRemoveSuggestionsInIndexGroup(byte[] indices, Grid grid, byte suggestedValue, byte[] valueIndices)
        {
            Cell[] column = grid.GetCells(indices);
            column = column.Where(cell => !valueIndices.Contains(cell.Coordinates.Index) && cell.GetSuggestions().Contains(suggestedValue)).ToArray();

            bool updated = false;
            foreach (Cell cell in column)
            {
                grid.RemoveSuggestion(cell.Coordinates.Index, suggestedValue);
                RemovedSuggestion = suggestedValue;
                updated = true;
            }
            return updated;
        }
    }
}
