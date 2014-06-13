function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.chip = null;
}

Cell.prototype.hasChip = function () {
    if (this.chip == null) {
        return false;
    } else {
        return true;
    }
}

function Chip() {
    this.side = undefined;
}

Chip.prototype.reverse = function () {
    if (this.side === "white") {
        this.side = "black";
    } else {
        this.side = "white";
    }
}

Chip.prototype.setWhite = function () {
    this.side = "white";
}

Chip.prototype.setBlack = function () {
    this.side = "black";
}

window.onload = init;

function init() {
    var Board = createBoard();

    setInitialPositionOn(Board);
}

function createBoard() {
    var boardSize = 8;
    var Board = new Array(boardSize);
    for (var i = 0; i < boardSize; i++) {
        Board[i] = new Array(boardSize);
    }

    for (var i = 0; i < boardSize; i++) {
        for (var j = 0; j < boardSize; j++) {
            Board[i][j] = new Cell(i, j);
        }
    }
    return Board;
}

function setInitialPositionOn(Board) {
    Board[3][3].chip = new Chip();
    Board[3][3].chip.setWhite();
    Board[4][4].chip = new Chip();
    Board[4][4].chip.setWhite();
    Board[3][4].chip = new Chip();
    Board[3][4].chip.setBlack();
    Board[4][3].chip = new Chip();
    Board[4][3].chip.setBlack();
}