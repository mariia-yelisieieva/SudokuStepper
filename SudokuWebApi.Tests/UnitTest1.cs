using Xunit;

using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;

namespace SudokuWebApi.Tests;

public class UnitTest1 : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient client;

    public UnitTest1(WebApplicationFactory<Program> factory)
    {
        client = factory.CreateClient();
    }

    [Fact]
    public async Task Solve_ValidPuzzle_ReturnsStepsAndInitialGrid()
    {
        int[] values = new int[]
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
        };

        var response = await client.PostAsJsonAsync("/api/sudoku/solve", new { values });
        response.EnsureSuccessStatusCode();

        var payload = await response.Content.ReadFromJsonAsync<SolveResponseTestDto>();
        Assert.NotNull(payload);
        Assert.Equal(81, payload!.InitialGrid.Cells.Count);
        Assert.NotEmpty(payload.Steps);
        Assert.Equal(81, payload.Steps[0].Grid.Cells.Count);
    }

    [Fact]
    public async Task Solve_InvalidLength_ReturnsBadRequest()
    {
        int[] values = new int[] { 1, 2, 3 };
        var response = await client.PostAsJsonAsync("/api/sudoku/solve", new { values });
        Assert.False(response.IsSuccessStatusCode);
        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Solve_KnownPuzzle_MatchesConsoleFinalGrid()
    {
        int[] values = new int[]
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
        };

        byte[] expectedConsoleFinalValues = new byte[]
        {
            2, 6, 0, 0, 0, 0, 0, 0, 1,
            8, 0, 0, 9, 2, 6, 0, 0, 5,
            3, 9, 0, 8, 0, 1, 7, 2, 6,
            9, 0, 0, 3, 0, 0, 0, 0, 7,
            6, 3, 8, 1, 0, 0, 2, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 1, 3,
            1, 2, 3, 0, 8, 5, 0, 7, 9,
            5, 8, 9, 7, 0, 0, 0, 0, 2,
            7, 4, 6, 2, 0, 0, 0, 0, 8
        };

        var response = await client.PostAsJsonAsync("/api/sudoku/solve", new { values });
        response.EnsureSuccessStatusCode();

        var payload = await response.Content.ReadFromJsonAsync<SolveResponseTestDto>();
        Assert.NotNull(payload);
        Assert.NotEmpty(payload!.Steps);

        byte[] apiFinalValues = payload.Steps.Last().Grid.Cells.Select(c => c.Value).ToArray();
        Assert.Equal(expectedConsoleFinalValues, apiFinalValues);
    }

    public sealed class SolveResponseTestDto
    {
        public GridSnapshotTestDto InitialGrid { get; init; } = new();
        public List<StepTestDto> Steps { get; init; } = new();
    }

    public sealed class StepTestDto
    {
        public GridSnapshotTestDto Grid { get; init; } = new();
    }

    public sealed class GridSnapshotTestDto
    {
        public List<CellStateTestDto> Cells { get; init; } = new();
    }

    public sealed class CellStateTestDto
    {
        public byte Value { get; init; }
    }
}