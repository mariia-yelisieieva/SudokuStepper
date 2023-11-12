using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SudokuModel
{   
    public class Grid
    {
        private readonly Cell[] cells = new Cell[81];

        private readonly byte[] cellValues;
        public Grid(params byte[] cellValues)
        {
            if (cellValues.Length != 81)
                throw new ArgumentException();
            this.cellValues = cellValues;

            for (byte x = 0; x < 9; x++)
                for (byte y = 0; y < 9; y++)
                    cells[y * 9 + x] = new Cell(x, y);
            
            for (int i = 0; i < cellValues.Length; i++)
            {
                if (cellValues[i] == 0)
                    continue;
                cells[i].Value = cellValues[i];
            }
        }

        public void Answer(byte x, byte y, byte value)
        {
            if (x < 0 || x > 8)
                throw new ArgumentException($"{x} coordinate is not supported");
            if (y < 0 || y > 8)
                throw new ArgumentException($"{y} coordinate is not supported");
            if (value < 1 || value > 9)
                throw new ArgumentException($"{value} value is not supported");

            cells[y * 9 + x].Value = value;
        }

        public void AddSuggestion(byte x, byte y, byte value)
        {
            if (x < 0 || x > 8)
                throw new ArgumentException($"{x} coordinate is not supported");
            if (y < 0 || y > 8)
                throw new ArgumentException($"{y} coordinate is not supported");
            if (value < 1 || value > 9)
                throw new ArgumentException($"{value} value is not supported");

            cells[y * 9 + x].AddSuggestion(value);
        }

        public void RemoveSuggestion(byte x, byte y, byte value)
        {
            if (x < 0 || x > 8)
                throw new ArgumentException($"{x} coordinate is not supported");
            if (y < 0 || y > 8)
                throw new ArgumentException($"{y} coordinate is not supported");
            if (value < 1 || value > 9)
                throw new ArgumentException($"{value} value is not supported");

            cells[y * 9 + x].RemoveSuggestion(value);
        }

        //public Grid Copy()
        //{
        //    var copy = new Grid(cellValues);
        //    return copy;
        //}
    }
}
