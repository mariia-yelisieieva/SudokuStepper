using SudokuModel;

namespace SudokuStepper.Steps
{
    public interface IStepHandler
    {
        bool MakeChange(Grid grid);

        string GetComment();

        string Name { get; }
    }
}
