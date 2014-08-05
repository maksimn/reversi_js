function View() {
}

View.prototype = {
    renderModel : function (model) {
        for (var i = 0; i < model.size; i++) {
            for (var j = 0; j < model.size; j++) {
                if (model.getCell(i, j).hasChip()) {
                    var elem_td = document.getElementById(String(i) + String(j));
                    var img = document.createElement("img");
                    img.src = "images/" + model.getCell(i, j).chip.side + ".gif";
                    img.alt = model.getCell(i, j).chip.side;
                    if (elem_td.hasChildNodes()) {
                        elem_td.removeChild(elem_td.childNodes[0]);
                    }
                    elem_td.appendChild(img);
                }
            }
        }
        var statElement = document.getElementById("stat");
        statElement.innerHTML = "black: " + model.qtyBlacks + "<br /> white: " + model.qtyWhites;
    }
}