using SudokuModel;
using SudokuStepper.Steps;

namespace SudokuStepper.StepHandlers
{
    public class HiddenCombinationStepHandler : IStepHandler
    {
        public string Name => "Hidden combination";

        public string GetComment() => $"The \"{Name}\" step: nothing was updated";

        public bool MakeChange(Grid grid)
        {
            return false;
        }
    }
}
