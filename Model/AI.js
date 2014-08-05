function AI() {
    this.color = undefined;
    this.possibleCells = [];
    this.numReversed = [];
}

AI.prototype = {
    setColor : function (color) {
        this.color = color;
    },
    getPossibleCells : function (model) {
        for (var i = 0; i < model.size; i++) {
            for (var j = 0; j < model.size; j++) {
                if (model.checkIfTheChipCouldBePutInThisCell(i, j, this.color)) {
                    this.possibleCells.push(new Cell(i, j));
                }
            }
        }
        if (this.possibleCells.length == 0) {
            alert("Game over!");
        }
    },
    getNumReversed : function (model) {
    },
    getCoordsOfTurn: function () {
        var x = Math.random() * this.possibleCells.length;
        var y = Math.floor(x);
        return String(this.possibleCells[y].x) + String(this.possibleCells[y].y);
    }
};
