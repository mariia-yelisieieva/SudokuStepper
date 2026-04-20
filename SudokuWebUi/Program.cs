var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

string apiBaseUrl = builder.Configuration.GetValue<string>("Api:BaseUrl") ?? "https://localhost:7271";

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/config", () => Results.Ok(new { apiBaseUrl }));

app.Run();

public partial class Program { }
