function Chip() {
    this.side = "white";
}

Chip.prototype.reverse = function () {
    if (this.side == "white") {
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