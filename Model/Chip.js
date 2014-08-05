function Chip() {
    this.side = "white";
}

Chip.prototype = {
    reverse : function () {
        if (this.side == "white") {
            this.side = "black";
        } else {
            this.side = "white";
        }
    },
    setWhite : function () {
        this.side = "white";
    },
    setBlack : function () {
        this.side = "black";
    }
};