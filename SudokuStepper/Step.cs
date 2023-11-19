using SudokuModel;

namespace SudokuStepper
{
    public class Step
    {
        public string Comment { get; }
        public Grid Grid { get; }

        public Step(string comment, Grid grid)
        {
            Comment = comment;
            Grid = grid;
        }
    }
}
