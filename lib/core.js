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

function random(min, max) {
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function color(color) {
  context.fillStyle = color;
}

function circle(x, y, r) {
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
}
