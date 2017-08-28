var canvas;
var circles = [];
function Circle() {
  this.y = 0;
  this.l = 12;
  this.space = 30;
  this.points = function (x, y, w, h) {
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(x, y, w, h);
  }
  return this;

}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

}


function draw() {
  background(0, 25, 25);

  circles[0] = new Circle();

  for (var i = 0; i <= width; i += circles[0].space) {
    for (var o = 0; o <= height; o += circles[0].space) {
      circles[0].points(i, o, circles[0].l, circles[0].l);

    }

  }


}
