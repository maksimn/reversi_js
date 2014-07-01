function ReversiController() {
    this.main = function () {
        function init() {
            var model = new Model();
            model.setInitialPositionOfGame();

            var view = new View();
            view.renderModel(model);

            var tds = document.getElementsByTagName("td");
            for (var i = 0; i < tds.length; i++) {
                tds[i].onclick = Turn;
            }

            function Turn(obj) {
                var coords = obj.target.getAttribute("id");
                if (coords != null) {
                    model.makeTurn(coords, "black");
                    view.renderModel(model);
                }
            }
        }

        window.onload = init;
    }
}