import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { finalize } from 'rxjs';
import { environment } from '../../environments/environment';
import { GridSnapshot, StepSnapshot, SudokuApiService } from '../../services/sudoku-api.service';
import { StepViewerComponent } from '../step-viewer/step-viewer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    StepViewerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private static readonly examplePuzzle = '200000001000906000000801720900300000008000204000000013103005009000700000046200000';

  puzzleInput = App.examplePuzzle;
  status = 'Ready.';
  isBusy = false;

  initialGrid: GridSnapshot | null = null;
  steps: StepSnapshot[] = [];
  currentIndex = 0;

  constructor(
    private readonly sudokuApi: SudokuApiService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  get currentSnapshot(): { name: string; comment: string; grid: GridSnapshot } | null {
    if (!this.initialGrid) {
      return null;
    }
    if (this.currentIndex === 0) {
      return { name: 'Initial grid', comment: 'Input puzzle before solver steps', grid: this.initialGrid };
    }
    const step = this.steps[this.currentIndex - 1];
    return { name: step.name, comment: step.comment ?? '', grid: step.grid };
  }

  get apiBaseUrl(): string {
    return environment.apiBaseUrl;
  }

  loadExample(): void {
    this.puzzleInput = App.examplePuzzle;
  }

  solve(): void {
    const cleaned = this.sanitizePuzzle(this.puzzleInput);
    if (cleaned.length !== 81) {
      this.status = 'Puzzle must contain exactly 81 digits.';
      return;
    }
    const values = cleaned.split('').map((x) => Number.parseInt(x, 10));
    this.isBusy = true;
    this.status = 'Solving...';

    this.sudokuApi
      .solve(values)
      .pipe(finalize(() => (this.isBusy = false)))
      .subscribe({
        next: (response) => {
          this.initialGrid = response.initialGrid;
          this.steps = response.steps;
          this.currentIndex = 0;
          this.status = `Solved. Steps: ${response.steps.length}. Completed: ${response.isSolved}.`;
          this.changeDetectorRef.detectChanges();
        },
        error: (error: HttpErrorResponse) => {
          this.status =
            typeof error.error === 'string'
              ? error.error
              : error.error?.title ?? error.error?.message ?? error.message ?? 'Unexpected error.';
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  onSliderChange(value: number): void {
    this.currentIndex = value ?? 0;
  }

  private sanitizePuzzle(raw: string): string {
    return (raw ?? '').replace(/[^0-9]/g, '');
  }
}
