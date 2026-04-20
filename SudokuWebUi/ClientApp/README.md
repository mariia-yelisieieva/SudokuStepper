# Sudoku Angular UI

This Angular app replaces the previous static `wwwroot` UI for `SudokuWebUi`.

## Prerequisites

- Node.js (LTS) with npm
- .NET SDK 10

## Development workflow

1. Run API backend:

```bash
dotnet run --project ../../SudokuWebApi/SudokuWebApi.csproj
```

2. Run Angular UI:

```bash
npm install
npm run start
```

Angular serves on `http://localhost:4200` by default and calls the API at `http://localhost:5027`.

## Build for .NET host

Build Angular assets into `../../wwwroot` (served by `SudokuWebUi`):

```bash
npm run build
```

Then run the .NET UI host:

```bash
dotnet run --project ../SudokuWebUi.csproj
```
