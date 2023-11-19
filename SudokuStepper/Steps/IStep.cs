using SudokuModel;

namespace SudokuStepper.Steps
{
    public interface IStep
    {
        bool MakeChange(Grid grid);

        string GetComment() => $"The step {Name} was not yet executed";

        string Name { get; }
    }
}
