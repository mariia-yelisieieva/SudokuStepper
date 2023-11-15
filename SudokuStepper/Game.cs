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

        public List<Grid> Steps = new List<Grid>();
        public void FindAnswer()
        {
            Grid currentStep = InitialStep;
            Grid newStep;
            bool updated;
            do
            {
                updated = false;
                updated |= currentStep.FillSingleSuggestionCells();
                if (updated)
                {
                    newStep = currentStep.Copy();
                    currentStep = newStep;
                    Steps.Add(newStep);
                }
                else
                {
                    updated |= currentStep.FillOnlyPossible();
                    if (updated)
                    {
                        newStep = currentStep.Copy();
                        currentStep = newStep;
                        Steps.Add(newStep);
                    }
                }
            }
            while (updated);
        }
    }
}