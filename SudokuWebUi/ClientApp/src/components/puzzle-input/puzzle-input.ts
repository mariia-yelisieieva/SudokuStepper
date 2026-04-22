import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-puzzle-input',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatProgressBarModule],
  templateUrl: './puzzle-input.html',
  styleUrl: './puzzle-input.scss'
})
export class PuzzleInputComponent implements OnChanges {
  private static readonly gridSize = 81;
  private static readonly defaultPreset = '200000001000906000000801720900300000008000204000000013103005009000700000046200000';

  readonly easyPreset = '420008900900042007083107000032605400500000000060210508071006040256400801340850006';
  readonly middlePreset = '068010047000680105097204803080000312704002900209030070006040780850020430000000520';
  readonly hardPreset = '600400000943805706000002040000608079095000160000200008700080013006009000010304000';
  readonly expertPreset = '006000028934826000002000000403570000000034790670000400200940060047201800000050200';
  readonly masterPreset = '090506070670090501100007009000020090000704000020100007700000100080000000400630000';
  readonly extremePreset = '000253000100007000709004000005000000070000053003400002000020400000600070860000900';
  readonly cellIndexes = Array.from({ length: PuzzleInputComponent.gridSize }, (_, index) => index);

  @Input({ required: true }) puzzleInput = '';
  @Input({ required: true }) status = 'Ready.';
  @Input({ required: true }) isBusy = false;

  @ViewChildren('gridCell') private gridCells?: QueryList<ElementRef<HTMLInputElement>>;

  @Output() puzzleInputChange = new EventEmitter<string>();
  @Output() solve = new EventEmitter<void>();

  protected readonly displayCells = Array.from({ length: PuzzleInputComponent.gridSize }, () => '');
  protected readonly solverValues = Array.from({ length: PuzzleInputComponent.gridSize }, () => 0);
  protected readonly invalidCells = Array.from({ length: PuzzleInputComponent.gridSize }, () => false);
  private lastEmittedPuzzleInput: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['puzzleInput']) {
      return;
    }
    if (changes['puzzleInput'].currentValue === this.lastEmittedPuzzleInput) {
      this.lastEmittedPuzzleInput = null;
      return;
    }
    this.applyExternalPuzzle(this.puzzleInput);
  }

  protected getCellClasses(index: number): Record<string, boolean> {
    const row = Math.floor(index / 9);
    const col = index % 9;
    return {
      cell: true,
      invalid: this.invalidCells[index],
      boxTop: row % 3 === 0,
      boxLeft: col % 3 === 0,
      boxBottom: row % 3 === 2,
      boxRight: col % 3 === 2
    };
  }

  protected onCellInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value ?? '';

    if (rawValue.length === 0) {
      this.displayCells[index] = '';
      this.solverValues[index] = 0;
      this.invalidCells[index] = false;
      this.emitPuzzleInput();
      return;
    }

    const normalized = this.normalizeDisplayValue(rawValue.slice(-1));
    const didAcceptValue = rawValue.length > 0 && normalized !== '';

    if (!didAcceptValue) {
      input.value = this.displayCells[index];
      return;
    }

    this.displayCells[index] = normalized;
    this.solverValues[index] = this.toSolverValue(normalized);
    this.invalidCells[index] = false;
    input.value = normalized;
    this.emitPuzzleInput();
    this.focusNextCell(index);
  }

  protected onCellFocus(index: number, event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    this.invalidCells[index] = false;
    input.select();
  }

  protected triggerSolve(): void {
    const hasEmpty = this.displayCells.some((value) => value === '');
    if (hasEmpty) {
      this.markEmptyCellsAsInvalid();
      return;
    }
    this.clearInvalidCells();
    this.solve.emit();
  }

  protected loadPreset(level: 'easy' | 'middle' | 'hard' | 'expert' | 'master' | 'extreme'): void {
    const preset =
      level === 'easy'
        ? this.easyPreset
        : level === 'middle'
          ? this.middlePreset
          : level === 'hard'
            ? this.hardPreset
            : level === 'expert'
              ? this.expertPreset
              : level === 'master'
                ? this.masterPreset
                : this.extremePreset;
    this.applyExternalPuzzle(preset);
    this.emitPuzzleInput();
  }

  private applyExternalPuzzle(raw: string): void {
    const sanitized = (raw ?? '').replace(/[^0-9-]/g, '');
    for (let index = 0; index < PuzzleInputComponent.gridSize; index += 1) {
      const char = sanitized[index] ?? '';
      const normalized = this.normalizeDisplayValue(char);
      this.displayCells[index] = normalized;
      this.solverValues[index] = this.toSolverValue(normalized);
      this.invalidCells[index] = false;
    }
  }

  private normalizeDisplayValue(value: string): string {
    if (!value) {
      return '';
    }
    if (value === '-' || value === '0') {
      return '-';
    }
    if (/^[1-9]$/.test(value)) {
      return value;
    }
    return '';
  }

  private toSolverValue(value: string): number {
    return value === '-' || value === '' ? 0 : Number.parseInt(value, 10);
  }

  private emitPuzzleInput(): void {
    this.lastEmittedPuzzleInput = this.solverValues.join('');
    this.puzzleInputChange.emit(this.lastEmittedPuzzleInput);
  }

  private markEmptyCellsAsInvalid(): void {
    for (let index = 0; index < PuzzleInputComponent.gridSize; index += 1) {
      this.invalidCells[index] = this.displayCells[index] === '';
    }
  }

  private clearInvalidCells(): void {
    for (let index = 0; index < PuzzleInputComponent.gridSize; index += 1) {
      this.invalidCells[index] = false;
    }
  }

  private focusNextCell(currentIndex: number): void {
    if (currentIndex >= PuzzleInputComponent.gridSize - 1) {
      return;
    }
    const nextInput = this.gridCells?.get(currentIndex + 1)?.nativeElement;
    nextInput?.focus();
    nextInput?.select();
  }
}
