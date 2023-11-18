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
        public void FindAnswer(Action<string, Grid, Grid> print)
        {
            Grid currentStep = InitialStep.Copy();
            bool updated;

            currentStep.RemoveAnsweredSuggestions();
            Step(currentStep, print, InitialStep);
            do
            {
                updated = false;
                updated |= currentStep.FillSingleSuggestionCells();
                if (updated)
                    Step(currentStep, print);
                else
                {
                    updated |= currentStep.FillOnlyPossible();
                    if (updated)
                        Step(currentStep, print);
                    else
                    {
                        updated |= currentStep.RemoveSuggestionsForOnlyPossible(2);
                        updated |= currentStep.RemoveSuggestionsForOnlyPossible(3);
                        updated |= currentStep.RemoveSuggestionsForOnlyPossible(4);
                        updated |= currentStep.RemoveSuggestionsForOnlyPossible(5);
                        if (updated)
                            Step(currentStep, print);
                    }
                }
            }
            while (updated);

            InitialStep.Dispose();
            foreach (var grid in Steps)
                grid.Dispose();
        }

        private void Step(Grid currentStep, Action<string, Grid, Grid> print, Grid previous = null)
        {
            Grid newStep = currentStep.Copy();
            print("step", newStep, previous ?? Steps.LastOrDefault());
            Steps.Add(newStep);
        }
    }
}