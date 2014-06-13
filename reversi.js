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

function Board() {
    this.size = 8;
    this.array = new Array(this.size);
    for (var i = 0; i < this.array.length; i++) {
        this.array[i] = new Array(this.size);
    }
    for (var i = 0; i < this.size; i++) {
        for (var j = 0; j < this.size; j++) {
            this.array[i][j] = new Cell(i, j);
        }
    }
}

Board.prototype.setInitialPositionOfGame = function () {
    this.array[3][3].chip = new Chip();
    this.array[3][3].chip.setWhite();
    this.array[4][4].chip = new Chip();
    this.array[4][4].chip.setWhite();
    this.array[3][4].chip = new Chip();
    this.array[3][4].chip.setBlack();
    this.array[4][3].chip = new Chip();
    this.array[4][3].chip.setBlack();
}

Board.prototype.getCell = function (i, j) {
    return this.array[i][j];
}

function View() {
}

View.prototype.renderModel = function (board) {
    for (var i = 0; i < board.size; i++) {
        for (var j = 0; j < board.size; j++) {
            if (board.getCell(i, j).hasChip()) {
                var elem_td = document.getElementById(String(i) + String(j));
                var img = document.createElement("img");
                img.src = "images/" + board.getCell(i, j).chip.side + ".gif";
                img.alt = board.getCell(i, j).chip.side;
                if (elem_td.hasChildNodes()) {
                    elem_td.removeChild(elem_td.childNodes[0]);
                }
                elem_td.appendChild(img);
            }
        }
    }
}

function init() {
    var board = new Board();
    board.setInitialPositionOfGame();

    var view = new View();
    view.renderModel(board);

    var tds = document.getElementsByTagName("td");
    function firstTurn(obj) {
        console.log("clicked element attribute: " + obj.target.getAttribute("id"));
    }

    for (var i = 0; i < tds.length; i++) {
        tds[i].onclick = firstTurn;
    }
}

window.onload = init;