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
        public void AddSuggestions()
        {
            Step1 = InitialStep.Copy();
            Step1.RefreshSuggestions();
        }
    }
}