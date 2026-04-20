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
        Assert.Contains("<app-root></app-root>", html);
        Assert.Contains("main-", html);
    }

    [Fact]
    public async Task UnknownRoute_FallsBackToAngularShell()
    {
        var response = await client.GetAsync("/solver");
        response.EnsureSuccessStatusCode();
        string body = await response.Content.ReadAsStringAsync();
        Assert.Contains("<app-root></app-root>", body);
    }
}