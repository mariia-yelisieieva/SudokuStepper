import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface CellState {
  value: number;
  candidates: number[];
  valueChanged: boolean;
  addedCandidates: number[];
  removedCandidates: number[];
}

export interface GridSnapshot {
  cells: CellState[];
}

export interface StepSnapshot {
  name: string;
  comment: string;
  grid: GridSnapshot;
}

export interface SolveResponse {
  initialGrid: GridSnapshot;
  steps: StepSnapshot[];
  isSolved: boolean;
}

@Injectable({ providedIn: 'root' })
export class SudokuApiService {
  private readonly solveUrl = `${environment.apiBaseUrl}/api/sudoku/solve`;

  constructor(private readonly http: HttpClient) {}

  solve(values: number[]): Observable<SolveResponse> {
    return this.http.post<SolveResponse>(this.solveUrl, { values });
  }
}
