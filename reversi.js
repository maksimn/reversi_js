window.onload = init;

function init() {
    setInitialPosition();

    var tds = document.getElementsByTagName("td");
    for(var i = 0; i < tds.length; i++) {
        tds[i].onclick = addChip;
    }
}

function addChip(obj) {
    var tdxx = obj.target;
    if (tdxx.hasChildNodes() == false) {
        var img = document.createElement("img");
        img.src = "images/white.gif";
        img.alt = "white";
        tdxx.appendChild(img);
    }
}

function setInitialPosition() {
    var td1 = document.getElementById("33");
    var td2 = document.getElementById("34");
    var td3 = document.getElementById("43");
    var td4 = document.getElementById("44");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    img1.src = "images/white.gif";
    img1.alt = "white";
    img2.src = "images/black.gif";
    img2.alt = "black";
    img3.src = "images/black.gif";
    img3.alt = "black";
    img4.src = "images/white.gif";
    img4.alt = "white";
    td1.appendChild(img1);
    td2.appendChild(img2);
    td3.appendChild(img3);
    td4.appendChild(img4);
}