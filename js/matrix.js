const MATRIX_CHARS = '01ABCDEF7890';
const MAX_LINES = 40;
const LINE_LENGTH = { min: 40, max: 80 };
const UPDATE_INTERVAL = 120;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLine() {
    const length = randomInt(LINE_LENGTH.min, LINE_LENGTH.max);
    let line = '';

    for (let i = 0; i < length; i++) {
        line += MATRIX_CHARS.charAt(Math.floor(Math.random() * MATRIX_CHARS.length));
    }

    return line;
}

export function initMatrix() {
    const output = document.getElementById('matrix-output');
    if (!output) return;

    const lines = [];

    setInterval(() => {
        const hackingWindow = document.getElementById('window-hacking');
        if (!hackingWindow || !hackingWindow.classList.contains('window-open')) {
            return;
        }

        lines.push(randomLine());
        if (lines.length > MAX_LINES) {
            lines.shift();
        }

        output.textContent = lines.join('\n');
        output.scrollTop = output.scrollHeight;
    }, UPDATE_INTERVAL);
}
