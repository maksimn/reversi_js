function Model() {
    this.turnNo = 1;
    this.qtyBlacks = 2;
    this.qtyWhites = 2;
    this.size = 8;
    this.board = new Array(this.size);
    for (var i = 0; i < this.size; i++) {
        this.board[i] = new Array(this.size);
        for (var j = 0; j < this.size; j++) {
            this.board[i][j] = new Cell(i, j);
        }
    }
}

Model.prototype = {
    setInitialPositionOfGame : function () {
        this.board[3][3].chip = new Chip();
        this.board[3][3].chip.setWhite();
        this.board[4][4].chip = new Chip();
        this.board[4][4].chip.setWhite();
        this.board[3][4].chip = new Chip();
        this.board[3][4].chip.setBlack();
        this.board[4][3].chip = new Chip();
        this.board[4][3].chip.setBlack();
    },
    getCell : function (i, j) {
        return this.board[i][j];
    },
    makeTurn : function (coords, color) {
        var x = parseInt(coords.charAt(0));
        var y = parseInt(coords.charAt(1));
        if (this.checkIfTheChipCouldBePutInThisCell(x, y, color)) {
            this.setChip(x, y, color);
            this.reverseChips(x, y, color);
            var ai = new AI();
            ai.setColor(this.inverseColor(color));
            ai.getPossibleCells(this);
            ai.getNumReversed(this);
            var _coords = ai.getCoordsOfTurn();
            var xx = parseInt(_coords.charAt(0));
            var yy = parseInt(_coords.charAt(1));
            this.setChip(xx, yy, this.inverseColor(color));
            this.reverseChips(xx, yy, this.inverseColor(color));
            this.turnNo++;
            this.countBlackAndWhiteChips();
        }
    },
    setChip : function (x, y, side) {
        this.board[x][y].chip = new Chip();
        if (side === "black") {
            this.board[x][y].chip.setBlack();
        } else {
            this.board[x][y].chip.setWhite();
        }
    },
    areCoordsValid : function (x, y) {
        if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
            return true;
        } else {
            return false;
        }
    },
    inverseColor : function (color) {
        if (color == "black") {
            return "white";
        } else {
            return "black";
        }
    },
    checkIfTheChipCouldBePutInThisCell : function (x, y, color) {
        if (this.board[x][y].hasChip()) {
            return false;
        }
        var directions = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
        for (var k = 0; k < directions.length; k++) {
            var dx = directions[k][0], dy = directions[k][1];
            var l = 1;
            if (this.hasChipWithDiffColor(x + l * dx, y + l * dy, color)) {
                l++;
            } else {
                continue;
            }
            while (this.areCoordsValid(x + l * dx, y + l * dy)) {
                if (this.hasChipWithSameColor(x + l * dx, y + l * dy, color)) {
                    return true;
                } else if (this.hasChipWithDiffColor(x + l * dx, y + l * dy, color)) {
                    l++;
                } else {
                    break;
                }
            }
        }
        return false;
    },
    hasChipWithDiffColor : function (x, y, color) {
        return this.areCoordsValid(x, y) && this.board[x][y].hasChip() && (this.board[x][y].chip.side == this.inverseColor(color));
    },
    hasChipWithSameColor : function (x, y, color) {
        return this.areCoordsValid(x, y) && this.board[x][y].hasChip() && (this.board[x][y].chip.side == color);
    },
    reverseChips : function (x, y, color) {
        var directions = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
        for (var k = 0; k < directions.length; k++) {
            var dx = directions[k][0], dy = directions[k][1];
            var l = 1;
            if (this.hasChipWithDiffColor(x + l * dx, y + l * dy, color)) {
                l++;
            } else {
                continue;
            }
            while (this.areCoordsValid(x + l * dx, y + l * dy)) {
                if (this.hasChipWithSameColor(x + l*dx, y + l*dy, color)) {
                    for (var a = 1; a < l; a++) {
                        this.board[x + a * dx][y + a * dy].chip.reverse();
                    }
                    break;
                } else if (this.hasChipWithDiffColor(x + l * dx, y + l * dy, color)) {
                    l++;
                } else {
                    break;
                }
            }
        }
    },
    countBlackAndWhiteChips : function () {
        this.qtyBlacks = 0, this.qtyWhites = 0;
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                if (this.board[i][j].hasChip() && (this.board[i][j].chip.side == "black")) {
                    this.qtyBlacks++;
                } else if (this.board[i][j].hasChip() && (this.board[i][j].chip.side == "white")) {
                    this.qtyWhites++;
                }
            }
        }
    }
};