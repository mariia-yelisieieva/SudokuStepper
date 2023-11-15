using SudokuModel;
using SudokuStepper;

byte[] task1 = new byte[]
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
}; // full solution

byte[] task2 = new byte[]
{
    2, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 9, 0, 6, 0, 0, 0,
    0, 0, 0, 8, 0, 1, 7, 2, 0,
    9, 0, 0, 3, 0, 0, 0, 0, 0,
    0, 0, 8, 0, 0, 0, 2, 0, 4,
    0, 0, 0, 0, 0, 0, 0, 1, 2,
    1, 0, 3, 0, 0, 5, 0, 0, 9,
    0, 0, 0, 7, 0, 0, 0, 0, 0,
    0, 4, 6, 2, 0, 0, 0, 0, 0
}; // partial solution

var game = new Game();
game.Initialize(task1);
PrintGrid("Initial task", game.InitialStep);

game.FindAnswer();
PrintGrid("Step 1", game.Steps.FirstOrDefault(), game.InitialStep);
for (int i = 1; i < game.Steps.Count; i++)
    PrintGrid("Step " + (i + 1), game.Steps[i], game.Steps[i - 1]);

Console.ReadLine();




void PrintGrid(string name, Grid? grid, Grid? previousGrid = null)
{
    if (grid == null)
        return;
    Console.WriteLine(name);
    for (byte i = 0; i < 9; i++)
    {
        for (byte j = 0; j < 9; j++)
        {
            string currentSymbol = grid.GetCellValueSymbol(i, j);
            if (previousGrid != null && previousGrid.GetCellValueSymbol(i, j) != currentSymbol)
                Console.ForegroundColor = ConsoleColor.Green;
            Console.Write(currentSymbol + " ");
            if (previousGrid != null)
                Console.ForegroundColor = ConsoleColor.Gray;
            if (j % 3 == 2)
                Console.Write("   ");
        }
        Console.WriteLine();
        if (i % 3 == 2)
            Console.WriteLine();
    }
    Console.WriteLine();
}