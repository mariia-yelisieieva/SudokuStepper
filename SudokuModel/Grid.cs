﻿namespace SudokuModel
{
    public class Grid
    {
        internal readonly Cell[] Cells = new Cell[81];

        private readonly byte[] cellValues;
        public Grid(params byte[] cellValues)
        {
            if (cellValues.Length != 81)
                throw new ArgumentException();
            this.cellValues = cellValues;

            for (byte i = 0; i < 81; i++)
                Cells[i] = new Cell(i);
            
            for (int i = 0; i < cellValues.Length; i++)
            {
                if (cellValues[i] == 0)
                    continue;
                Cells[i].Value = cellValues[i];
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

            Cells[y * 9 + x].Value = value;
        }

        public void RefreshSuggestions()
        {

            for (byte i = 0; i < Cells.Length; i++)
            {
                AddSuggestion(i, new byte[] { 1, 2, 3, 4, 5, 6, 7, 8, 9});
                byte[] adjacentIndices = Cells[i].AdjacentIndices;
                byte[] adjacentValues = Cells.Where(cell => adjacentIndices.Contains(cell.Index)).Select(cell => cell.Value)
                    .Where(value => value != 0).Distinct().OrderBy(value => value).ToArray();
                RemoveSuggestion(i, adjacentValues);
            }
        }

        public void AddSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].AddSuggestion(value);
        }

        public void RemoveSuggestion(byte index, params byte[] values)
        {
            foreach (byte value in values)
                Cells[index].RemoveSuggestion(value);
        }

        public Grid Copy()
        {
            var copy = new Grid(cellValues);
            for (int i = 0; i < Cells.Length; i++)
                copy.Cells[i] = Cells[i].Copy();
            return copy;
        }
    }
}
