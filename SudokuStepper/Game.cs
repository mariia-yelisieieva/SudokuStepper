﻿using SudokuModel;

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
            Step1.FillSingleSuggestionCells();
        }

        public Grid Step2;
        public void FillOnlyPossibleInGroup()
        {
            Step2 = Step1.Copy();
            Step2.FillOnlyPossible();
        }
    }
}