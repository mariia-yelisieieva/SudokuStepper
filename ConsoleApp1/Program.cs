﻿using SudokuStepper;

var game = new Game();
game.Initialize(new byte[]
{
    0, 1, 0, 0, 6, 0, 0, 0, 4,
    0, 0, 4, 0, 1, 5, 0, 6, 0,
    0, 6, 0, 0, 3, 0, 8, 0, 0,
    5, 0, 9, 7, 0, 0, 0, 0, 0,
    1, 0, 3, 0, 5, 0, 0, 0, 0,
    7, 0, 0, 2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3, 1,
    9, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 8, 0, 0, 0, 0, 4, 0
});

game.AddSuggestions();

Console.ReadLine();