using SudokuStepper;
using SudokuStepper.StepHandlers;
using SudokuStepper.Steps;
using SudokuWebApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IStepHandler, ObviousSingleStepHandler>();
builder.Services.AddTransient<IStepHandler, LastPossibleStepHandler>();
builder.Services.AddTransient<IStepHandler, PointingCombinationStepHandler>();
builder.Services.AddTransient<IStepHandler, ObviousCombinationOf2StepHandler>();
builder.Services.AddTransient<IStepHandler, ObviousCombinationOf3StepHandler>();
builder.Services.AddTransient<IStepHandler, ObviousCombinationOf4StepHandler>();
builder.Services.AddTransient<Game>();
builder.Services.AddTransient<SudokuSolverService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("UiPolicy", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("UiPolicy");
app.UseAuthorization();
app.MapControllers();
app.Run();

public partial class Program { }
