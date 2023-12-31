﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SudokuModel;
using SudokuStepper;
using SudokuStepper.StepHandlers;
using SudokuStepper.Steps;
using static Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions;

HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);

IServiceCollection services = builder.Services
    .AddTransient<IStepHandler, ObviousSingleStepHandler>()
    .AddTransient<IStepHandler, LastPossibleStepHandler>()
    .AddTransient<IStepHandler, PointingCombinationStepHandler>()
    .AddTransient<IStepHandler, ObviousCombinationOf2StepHandler>()
    .AddTransient<IStepHandler, ObviousCombinationOf3StepHandler>()
    .AddTransient<IStepHandler, ObviousCombinationOf4StepHandler>()
    .AddTransient<Game>();

using IHost host = builder.Build();
//await host.RunAsync();



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
    0, 0, 0, 0, 0, 0, 0, 1, 3,
    1, 0, 3, 0, 0, 5, 0, 0, 9,
    0, 0, 0, 7, 0, 0, 0, 0, 0,
    0, 4, 6, 2, 0, 0, 0, 0, 0
}; // partial solution

//services.ConfigureServices();

ServiceProvider serviceProvider = services.BuildServiceProvider();

var game = serviceProvider.GetRequiredService<Game>();
game.Initialize(task2);
PrintGrid("Initial task", game.InitialStep);

game.FindAnswer();

PrintGridWithSuggestions("Step 1", game.StepResults.First(), game.InitialStep);
for (int i = 1; i < game.StepResults.Count; i++)
    PrintGridWithSuggestions("Step " + (i + 1), game.StepResults[i], game.StepResults[i - 1].Grid);

PrintGrid("Result", game.StepResults.Last().Grid);

Console.ReadLine();


void PrintGridWithSuggestions(string name, Step? step, Grid? previousGrid = null)
{
    if (step == null)
        return;
    //if (step.Name != "Pointing combination") 
    //    return;

    Console.ForegroundColor = ConsoleColor.Gray;
    Console.WriteLine();
    Console.WriteLine($"~~~~~~~~~~~~~~~~~~~~~~~~~~ {name} ~~~~~~~~~~~~~~~~~~~~~~~~~~");
    Console.WriteLine(step.Comment);
    Console.WriteLine();

    for (byte i = 0; i < 9; i++)
    {
        for (byte suggRow = 0; suggRow < 3; suggRow++)
        {
            for (byte j = 0; j < 9; j++)
            {
                string answer = step.Grid.GetCellValueSymbol(i, j);
                string[] suggestions = step.Grid.GetCellSuggestionsSymbols(i, j);
                string[] previousSuggestions = previousGrid?.GetCellSuggestionsSymbols(i, j);

                if (answer != "_")
                {
                    if (suggRow == 1)
                    {
                        bool changed = previousGrid != null && previousGrid.GetCellValueSymbol(i, j) != answer;
                        Console.ForegroundColor = changed ? ConsoleColor.Green : ConsoleColor.White;
                        Console.Write(answer.PadLeft(3).PadRight(9));
                    }
                    else
                    {
                        Console.Write(string.Empty.PadLeft(9));
                    }
                }
                else
                {
                    int index = suggRow * 3 + 0;
                    PrintSuggestion(previousGrid, suggestions, previousSuggestions, index);
                    Console.Write(" ");

                    index = suggRow * 3 + 1;
                    PrintSuggestion(previousGrid, suggestions, previousSuggestions, index);
                    Console.Write(" ");

                    index = suggRow * 3 + 2;
                    PrintSuggestion(previousGrid, suggestions, previousSuggestions, index);
                    Console.Write("    ");
                }

                if (j % 3 == 2)
                {
                    Console.Write("    ");
                }
            }
            Console.WriteLine();
        }
        Console.WriteLine();

        if (i % 3 == 2)
        {
            Console.WriteLine();
            Console.WriteLine();
        }
    }
}

void PrintGrid(string name, Grid? grid, Grid? previousGrid = null)
{
    if (grid == null)
        return;
    Console.ForegroundColor = ConsoleColor.Gray;
    Console.WriteLine();
    Console.WriteLine($"~~~~~~ {name} ~~~~~~");
    Console.WriteLine();
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

void PrintSuggestion(Grid? previousGrid, string[] suggestions, string[] previousSuggestions, int index)
{
    bool changed = previousGrid != null && previousSuggestions[index] != suggestions[index];
    if (changed)
    {
        if (previousSuggestions[index] != "_")
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write("x");
        }
        else
        {
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.Write(suggestions[index]);
        }
    }
    else
    {
        Console.ForegroundColor = ConsoleColor.DarkGray;
        Console.Write(suggestions[index]);
    }
}