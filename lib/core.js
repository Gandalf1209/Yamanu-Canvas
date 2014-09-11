var canvas;
var context;

var WIDTH;
var HEIGHT:

function init(m_canvas) {
  canvas = m_canvas;
  context = canvas.getContext("2d");
  WIDTH = canvas.width;
  HEIGHT = canvas.height;
}

function rect(x, y, w, h) {
  context.fillRect(x, y, w, h);
}

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}