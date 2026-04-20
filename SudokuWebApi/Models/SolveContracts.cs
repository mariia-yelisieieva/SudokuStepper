namespace SudokuWebApi.Models;

public sealed class SolveRequest
{
    public int[] Values { get; init; } = Array.Empty<int>();
}

public sealed class SolveResponse
{
    public GridSnapshotDto InitialGrid { get; init; } = new();
    public List<StepDto> Steps { get; init; } = new();
    public bool IsSolved { get; init; }
}

public sealed class StepDto
{
    public string Name { get; init; } = string.Empty;
    public string Comment { get; init; } = string.Empty;
    public GridSnapshotDto Grid { get; init; } = new();
}

public sealed class GridSnapshotDto
{
    public List<CellStateDto> Cells { get; init; } = new();
}

public sealed class CellStateDto
{
    public byte Value { get; init; }
    public byte[] Candidates { get; init; } = Array.Empty<byte>();
    public bool ValueChanged { get; init; }
    public byte[] AddedCandidates { get; init; } = Array.Empty<byte>();
    public byte[] RemovedCandidates { get; init; } = Array.Empty<byte>();
}
