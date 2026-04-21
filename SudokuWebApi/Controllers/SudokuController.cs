using Microsoft.AspNetCore.Mvc;
using SudokuWebApi.Models;
using SudokuWebApi.Services;

namespace SudokuWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class SudokuController : ControllerBase
{
    private readonly SudokuSolverService solverService;
    private readonly ILogger<SudokuController> logger;

    public SudokuController(SudokuSolverService solverService, ILogger<SudokuController> logger)
    {
        this.solverService = solverService;
        this.logger = logger;
    }

    [HttpPost("solve")]
    [ProducesResponseType(typeof(SolveResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<SolveResponse> Solve([FromBody] SolveRequest request)
    {
        logger.LogInformation("solve request received at " + DateTime.Now.ToString("HH:mm:ss dd-MM-yyyy"));

        if (request.Values is null || request.Values.Length != 81)
            return BadRequest("The payload must contain exactly 81 values.");

        if (request.Values.Any(v => v is < 0 or > 9))
            return BadRequest("Cell values must be in range 0..9.");

        byte[] values = request.Values.Select(v => (byte)v).ToArray();
        SolveResponse response = solverService.Solve(values);
        return Ok(response);
    }
}
