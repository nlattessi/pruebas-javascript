function require(s)
{
    var script = document.createElement("script");
    script.src = s + "?" + performance.now();
    script.type = "text/javascript";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
    head.removeChild(script);
}