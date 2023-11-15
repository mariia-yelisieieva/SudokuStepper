using SudokuModel;
using SudokuStepper;
using System.Text;

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
PrintGridWithSuggestions("Step 1", game.Steps.FirstOrDefault(), game.InitialStep);
for (int i = 1; i < game.Steps.Count; i++)
    PrintGridWithSuggestions("Step " + (i + 1), game.Steps[i], game.Steps[i - 1]);

Console.ReadLine();



void PrintGridWithSuggestions(string name, Grid? grid, Grid? previousGrid = null)
{
    if (grid == null)
        return;
    Console.WriteLine(name);

    StringBuilder values = new();
    StringBuilder suggestions1 = new();
    StringBuilder suggestions2 = new();
    StringBuilder suggestions3 = new();

    for (byte i = 0; i < 9; i++)
    {
        for (byte j = 0; j < 9; j++)
        {
            string value = grid.GetCellValueSymbol(i, j);
            values.Append(value.PadRight(9));

            if (value == "_")
            {
                string[] suggestions = grid.GetCellSuggestionsSymbols(i, j);
                suggestions1.Append($"{suggestions[0]} {suggestions[1]} {suggestions[2]}    ");
                suggestions2.Append($"{suggestions[3]} {suggestions[4]} {suggestions[5]}    ");
                suggestions3.Append($"{suggestions[6]} {suggestions[7]} {suggestions[8]}    ");
            }
            else
            {
                suggestions1.Append(string.Empty.PadLeft(9));
                suggestions2.Append(string.Empty.PadLeft(9));
                suggestions3.Append(string.Empty.PadLeft(9));
            }

            if (j % 3 == 2)
            {
                values.Append("    ");
                suggestions1.Append("    ");
                suggestions2.Append("    ");
                suggestions3.Append("    ");
            }
        }

        Console.WriteLine(values);
        values.Clear();

        Console.ForegroundColor = ConsoleColor.DarkGray;
        Console.WriteLine(suggestions1);
        suggestions1.Clear();
        Console.WriteLine(suggestions2);
        suggestions2.Clear();
        Console.WriteLine(suggestions3);
        suggestions3.Clear();
        Console.ForegroundColor = ConsoleColor.Gray;

        if (i % 3 == 2)
            Console.WriteLine();
    }
}

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