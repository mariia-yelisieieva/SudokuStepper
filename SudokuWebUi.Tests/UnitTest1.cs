using Xunit;

using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;

namespace SudokuWebUi.Tests;

public class UnitTest1 : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient client;

    public UnitTest1(WebApplicationFactory<Program> factory)
    {
        client = factory.CreateClient();
    }

    [Fact]
    public async Task HomePage_ReturnsVisualizerShell()
    {
        string html = await client.GetStringAsync("/");
        Assert.Contains("Sudoku Step Visualizer", html);
        Assert.Contains("id=\"grid\"", html);
    }

    [Fact]
    public async Task Config_ReturnsApiBaseUrl()
    {
        var response = await client.GetAsync("/config");
        response.EnsureSuccessStatusCode();
        string body = await response.Content.ReadAsStringAsync();
        Assert.Contains("apiBaseUrl", body);
    }
}