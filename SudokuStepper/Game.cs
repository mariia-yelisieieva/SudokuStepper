using SudokuModel;

namespace SudokuStepper
{
    public class Game
    {
        public Grid InitialStep;
        public void Initialize(params byte[] values)
        {
            InitialStep = new Grid(values);
        }

        public List<Grid> Steps = new();
        public void FindAnswer()
        {
            Grid currentStep = InitialStep.Copy();
            bool updated;

            currentStep.RemoveAnsweredSuggestions();
            Step(currentStep);
            do
            {
                updated = false;
                updated |= currentStep.FillSingleSuggestionCells();
                if (updated)
                    Step(currentStep);
                else
                {
                    updated |= currentStep.FillOnlyPossible();
                    if (updated)
                        Step(currentStep);
                }
            }
            while (updated);

            InitialStep.Dispose();
            foreach (var grid in Steps)
                grid.Dispose();
        }

        private void Step(Grid currentStep)
        {
            Grid newStep = currentStep.Copy();
            Steps.Add(newStep);
        }
    }
}