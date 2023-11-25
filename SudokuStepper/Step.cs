using SudokuModel;

namespace SudokuStepper
{
    public class Step
    {
        public string Name { get; }
        public string Comment { get; }
        public Grid Grid { get; }

        public Step(string name, string comment, Grid grid)
        {
            Name = name;
            Comment = comment;
            Grid = grid;
        }
    }
}
