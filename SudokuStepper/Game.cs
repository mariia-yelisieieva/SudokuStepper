using SudokuModel;
using SudokuStepper.Steps;

namespace SudokuStepper
{
    public class Game
    {
        private readonly IEnumerable<IStepHandler> stepHandlers;
        public Game(IEnumerable<IStepHandler> stepHandlers)
        {
            this.stepHandlers = stepHandlers;
        }

        public Grid InitialStep;
        public void Initialize(params byte[] values)
        {
            InitialStep = new Grid(values);
        }

        public List<Step> StepResults = new();
        public void FindAnswer()
        {
            Grid currentStep = InitialStep.Copy();
            bool updated;

            currentStep.AddPossibleSuggestions();
            Grid newStep = currentStep.Copy();
            StepResults.Add(new Step("Possible suggestions added", newStep));

            do
            {
                updated = false;

                foreach (IStepHandler stepHandler in stepHandlers)
                {
                    updated |= stepHandler.MakeChange(currentStep);
                    if (!updated)
                        continue;

                    newStep = currentStep.Copy();
                    StepResults.Add(new Step(stepHandler.GetComment(), newStep));
                    break;
                }
            }
            while (updated);

            InitialStep.Dispose();
            foreach (var step in StepResults)
                step.Grid.Dispose();
        }
    }
}