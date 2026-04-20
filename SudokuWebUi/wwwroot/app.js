const examplePuzzle = "200000001000906000000801720900300000008000204000000013103005009000700000046200000";

const state = {
    apiBaseUrl: "",
    initialGrid: null,
    steps: [],
    currentIndex: 0
};

const el = {
    puzzleInput: document.getElementById("puzzleInput"),
    loadExampleBtn: document.getElementById("loadExampleBtn"),
    solveBtn: document.getElementById("solveBtn"),
    status: document.getElementById("status"),
    prevStepBtn: document.getElementById("prevStepBtn"),
    nextStepBtn: document.getElementById("nextStepBtn"),
    stepRange: document.getElementById("stepRange"),
    stepLabel: document.getElementById("stepLabel"),
    stepComment: document.getElementById("stepComment"),
    grid: document.getElementById("grid")
};

function showStatus(message) {
    el.status.textContent = message;
}

function sanitizePuzzle(raw) {
    return (raw || "").replace(/[^0-9]/g, "");
}

function parsePuzzleValues(raw) {
    const cleaned = sanitizePuzzle(raw);
    if (cleaned.length !== 81) {
        throw new Error("Puzzle must contain exactly 81 digits.");
    }
    return cleaned.split("").map((x) => Number.parseInt(x, 10));
}

function getCurrentSnapshot() {
    if (state.currentIndex === 0) {
        return {
            name: "Initial grid",
            comment: "Input puzzle before solver steps",
            grid: state.initialGrid
        };
    }
    return state.steps[state.currentIndex - 1];
}

function render() {
    const snapshot = getCurrentSnapshot();
    if (!snapshot || !snapshot.grid) {
        return;
    }

    el.stepLabel.textContent = `${snapshot.name} (${state.currentIndex}/${state.steps.length})`;
    el.stepComment.textContent = snapshot.comment ?? "";

    el.grid.innerHTML = "";
    snapshot.grid.cells.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const cellEl = document.createElement("div");
        cellEl.className = "cell";
        if (row % 3 === 0) cellEl.classList.add("boxTop");
        if (col % 3 === 0) cellEl.classList.add("boxLeft");
        if (row % 3 === 2) cellEl.classList.add("boxBottom");
        if (col % 3 === 2) cellEl.classList.add("boxRight");

        if (cell.value > 0) {
            cellEl.classList.add("solved");
            if (cell.valueChanged) {
                cellEl.classList.add("valueChanged");
            }
            cellEl.textContent = `${cell.value}`;
        } else {
            const candGrid = document.createElement("div");
            candGrid.className = "candGrid";

            for (let n = 1; n <= 9; n += 1) {
                const candEl = document.createElement("div");
                candEl.className = "cand";
                const isPresent = cell.candidates.includes(n);
                const isAdded = cell.addedCandidates.includes(n);
                const isRemoved = cell.removedCandidates.includes(n);

                if (isRemoved) {
                    candEl.classList.add("removed");
                    candEl.textContent = "x";
                } else if (isPresent) {
                    candEl.classList.add("present");
                    candEl.classList.toggle("added", isAdded);
                    candEl.textContent = `${n}`;
                } else {
                    candEl.textContent = "_";
                }

                candGrid.appendChild(candEl);
            }

            cellEl.appendChild(candGrid);
        }

        el.grid.appendChild(cellEl);
    });

    el.prevStepBtn.disabled = state.currentIndex <= 0;
    el.nextStepBtn.disabled = state.currentIndex >= state.steps.length;
    el.stepRange.max = `${state.steps.length}`;
    el.stepRange.value = `${state.currentIndex}`;
}

async function loadConfig() {
    const response = await fetch("/config");
    if (!response.ok) {
        throw new Error("Failed to load UI config.");
    }
    const config = await response.json();
    state.apiBaseUrl = config.apiBaseUrl;
}

async function solve() {
    try {
        showStatus("Solving...");
        const values = parsePuzzleValues(el.puzzleInput.value);
        const response = await fetch(`${state.apiBaseUrl}/api/sudoku/solve`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ values })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Solve request failed.");
        }

        const data = await response.json();
        state.initialGrid = data.initialGrid;
        state.steps = data.steps;
        state.currentIndex = 0;
        showStatus(`Solved. Steps: ${data.steps.length}. Completed: ${data.isSolved}.`);
        render();
    } catch (error) {
        showStatus(error.message || "Unexpected error");
    }
}

el.loadExampleBtn.addEventListener("click", () => {
    el.puzzleInput.value = examplePuzzle;
});
el.solveBtn.addEventListener("click", solve);
el.prevStepBtn.addEventListener("click", () => {
    if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        render();
    }
});
el.nextStepBtn.addEventListener("click", () => {
    if (state.currentIndex < state.steps.length) {
        state.currentIndex += 1;
        render();
    }
});
el.stepRange.addEventListener("input", (event) => {
    state.currentIndex = Number.parseInt(event.target.value, 10) || 0;
    render();
});

async function start() {
    await loadConfig();
    el.puzzleInput.value = examplePuzzle;
    showStatus("Ready.");
}

start().catch((error) => showStatus(error.message || "Startup failed."));
