using SudokuModel;
using SudokuStepper;

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
PrintGrid("initial grid", game.InitialStep);

game.FillSingleSuggestionCells();
PrintGrid("filled single suggestion cells", game.Step1);

Console.ReadLine();




void PrintGrid(string name, Grid grid)
{
    Console.WriteLine(name);
    for (byte i = 0; i < 9; i++)
    {
        for (byte j = 0; j < 9; j++)
        {
            Console.Write(grid.GetCellValue(i, j) + " ");
            if (j % 3 == 2)
                Console.Write("   ");
        }
        Console.WriteLine();
        if (i % 3 == 2)
            Console.WriteLine();
    }
    Console.WriteLine();
}