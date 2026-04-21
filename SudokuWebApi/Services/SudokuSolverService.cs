using SudokuModel;
using SudokuStepper;
using SudokuWebApi.Models;

namespace SudokuWebApi.Services;

public sealed class SudokuSolverService
{
    private readonly Game game;

    public SudokuSolverService(Game game)
    {
        this.game = game;
    }

    public SolveResponse Solve(byte[] values)
    {
        game.Initialize(values);

        Grid initialGrid = game.InitialStep.Copy();
        game.FindAnswer();

        List<StepDto> steps = new();
        Grid previousGrid = initialGrid;
        foreach (var step in game.StepResults)
        {
            steps.Add(new StepDto
            {
                Name = step.Name,
                Comment = step.Comment,
                Grid = BuildSnapshot(step.Grid, previousGrid)
            });

            previousGrid = step.Grid;
        }

        Grid finalGrid = game.StepResults.LastOrDefault()?.Grid ?? game.InitialStep;

        return new SolveResponse
        {
            InitialGrid = BuildSnapshot(initialGrid, null),
            Steps = steps,
            IsSolved = finalGrid.IsAllAnswered
        };
    }

    private static GridSnapshotDto BuildSnapshot(Grid current, Grid? previous)
    {
        List<CellStateDto> cells = new(81);
        for (byte i = 0; i < current.Cells.Length; i++)
        {
            var currentCell = current.Cells[i];
            int[] candidates = currentCell.GetSuggestions().OrderBy(x => x).Select(x => (int)x).ToArray();

            byte previousValue = 0;
            int[] previousCandidates = Array.Empty<int>();
            if (previous != null)
            {
                previousValue = previous.Cells[i].Value;
                previousCandidates = previous.Cells[i].GetSuggestions().OrderBy(x => x).Select(x => (int)x).ToArray();
            }

            cells.Add(new CellStateDto
            {
                Value = currentCell.Value,
                Candidates = candidates,
                ValueChanged = previous != null && previousValue != currentCell.Value,
                AddedCandidates = candidates.Except(previousCandidates).OrderBy(x => x).ToArray(),
                RemovedCandidates = previousCandidates.Except(candidates).OrderBy(x => x).ToArray()
            });
        }

        return new GridSnapshotDto { Cells = cells };
    }
}
