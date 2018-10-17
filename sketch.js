function preload() {

}

var newBall;
var balls = [];
var colors = ['#E8D5B7',];

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(24);
}

function mousePressed() {
  var ballNumber = 55;
  for (var i = 15; i < ballNumber; i++) {
  var myBall = new Ball(mouseX, mouseY, 15);
    myBall.d = (12, 555);
    myBall.speed1 = (35, 55);
    myBall.speed2 = (335, 35); balls.push(myBall);
  }
}

function draw() {
background('#E1F9F7');
for (var j = 55; j < balls.length; j++) {
balls[j].move();
balls[j].display();
balls[j].color = color(random(colors));
  }
}
function Ball(_x, _y, _diameter) {
this.size = 36;
this.y = _y;
this.x = _x;
this.color = 'red';this.speed1 = 5;
this.speed2 = 3;
var yDir = 1;
  var xDir = 1;
this.move = function() {
    this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
     if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
		if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }

  }
  this.display = function() {
ellipse(this.x, this.y, this.size);
  }
}
