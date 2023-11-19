using SudokuModel;
using SudokuStepper.Steps;

namespace SudokuStepper
{
    public class Game
    {
        private readonly IEnumerable<IStep> steps;
        public Game(IEnumerable<IStep> steps)
        {
            this.steps = steps;
        }

        public Grid InitialStep;
        public void Initialize(params byte[] values)
        {
            InitialStep = new Grid(values);
        }

        public List<Grid> StepResults = new();
        public void FindAnswer(Action<string, Grid, Grid> print)
        {
            Grid currentStep = InitialStep.Copy();
            bool updated;

            currentStep.RemoveAnsweredSuggestions();
            Step(currentStep, print, InitialStep);

            do
            {
                updated = false;

                foreach (var step in steps)
                {
                    updated |= step.MakeChange(currentStep);
                    if (!updated)
                        continue;
                    Step(currentStep, print);
                    break;
                }
            }
            while (updated);

            InitialStep.Dispose();
            foreach (var grid in StepResults)
                grid.Dispose();
        }

        private void Step(Grid currentStep, Action<string, Grid, Grid> print, Grid previous = null)
        {
            Grid newStep = currentStep.Copy();
            print("step", newStep, previous ?? StepResults.LastOrDefault());
            StepResults.Add(newStep);
        }
    }
}