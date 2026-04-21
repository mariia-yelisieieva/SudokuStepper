import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { CellState, GridSnapshot } from '../../services/sudoku-api.service';

@Component({
  selector: 'app-step-viewer',
  imports: [CommonModule, FormsModule, MatCardModule, MatIconModule, MatSliderModule],
  templateUrl: './step-viewer.component.html',
  styleUrl: './step-viewer.component.scss'
})
export class StepViewerComponent {
  @Input({ required: true }) snapshot!: { name: string; comment: string; grid: GridSnapshot };
  @Input({ required: true }) initialGrid!: GridSnapshot;
  @Input({ required: true }) stepsLength = 0;
  @Input({ required: true }) currentIndex = 0;
  @Output() currentIndexChange = new EventEmitter<number>();

  get currentStepLabel(): string {
    return `${this.snapshot.name} (${this.currentIndex}/${this.stepsLength})`;
  }
  get canGoPrev(): boolean {
    return this.currentIndex > 0;
  }
  get canGoNext(): boolean {
    return this.currentIndex < this.stepsLength;
  }
  goPrev(): void {
    if (this.canGoPrev) this.currentIndexChange.emit(this.currentIndex - 1);
  }
  goNext(): void {
    if (this.canGoNext) this.currentIndexChange.emit(this.currentIndex + 1);
  }
  onSliderChange(value: number): void {
    this.currentIndexChange.emit(value ?? 0);
  }

  isGivenCell(index: number): boolean {
    return (this.initialGrid?.cells?.[index]?.value ?? 0) > 0;
  }

  getCellClasses(index: number, value: number, valueChanged: boolean, isGiven: boolean): Record<string, boolean> {
    const row = Math.floor(index / 9);
    const col = index % 9;
    return {
      cell: true,
      solved: value > 0,
      valueChanged,
      given: value > 0 && isGiven,
      boxTop: row % 3 === 0,
      boxLeft: col % 3 === 0,
      boxBottom: row % 3 === 2,
      boxRight: col % 3 === 2
    };
  }

  getCandidateState(cell: CellState, candidate: number): 'added' | 'removed' | 'unchanged' {
    if (cell.removedCandidates.includes(candidate)) return 'removed';
    if (cell.candidates.includes(candidate) && cell.addedCandidates.includes(candidate)) return 'added';
    return 'unchanged';
  }

  isCandidatePresent(cell: CellState, candidate: number): boolean {
    return cell.candidates.includes(candidate);
  }
}
