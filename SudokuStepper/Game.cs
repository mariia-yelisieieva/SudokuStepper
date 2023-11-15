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

        public Grid Step1;
        public void FillSingleSuggestionCells()
        {
            Step1 = InitialStep.Copy();

            bool updated;
            do
            {
                updated = false;
                updated |= Step1.FillSingleSuggestionCells();
            }
            while (updated);
        }

        public Grid Step2;
        public void FillOnlyPossibleInGroup()
        {
            Step2 = Step1.Copy();

            bool updated;
            do
            {
                updated = false;
                updated |= Step2.FillSingleSuggestionCells();
                updated |= Step2.FillOnlyPossible();
            }
            while (updated);
        }
    }
}