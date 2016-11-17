function reload()
{
    require("index.js");
    render();
}

function render()
{
    var body = document.getElementsByTagName("body")[0];
    while (body.hasChildNodes()) {
        body.removeChild(body.lastChild);
    }

    var canvas = document.createElement("canvas");
    canvas.width = 650;
    canvas.height = 530;
    var ctx = canvas.getContext("2d");

    drawGraph(ctx);

    body.appendChild(canvas);
}

function drawGraph(ctx)
{
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#f00";
    ctx.strokeRect(100, 100, 200, 200);
    ctx.fillRect(100, 100, 200, 200);
}

if (!window.has_reload) {
    window.has_reload = true;
    window.setInterval(reload, 250);
}
