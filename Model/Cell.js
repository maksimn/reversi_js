function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.chip = null;
}

Cell.prototype = {
    hasChip : function () {
        if (this.chip == null) {
            return false;
        } else {
            return true;
        }
    }
};