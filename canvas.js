var canvas = document.querySelector('canvas');

console.log(canvas)

canvas.width = window.innerWidth;    // Gets width
canvas.height = window.innerHeight;  // Gets height

var c = canvas.getContext('2d');// Extends canvas to let us use 2d elements 

// c.fillStyle = 'rgba(255, 0, 0, .1)'
// c.fillRect(100, 100, 100, 100)  // x, y, width, height, creates a box on screen
// c.fillStyle = 'rgba(0, 255, 0, .1)'
// c.fillRect(400, 300, 200, 100)  // x, y, width, height, creates a box on screen
// c.fillRect(250, 200, 100, 300)  // x, y, width, height, creates a box on screen

// // 2. Drawing on the Canvas
// // Line
// c.beginPath();
// c.moveTo(50, 300); // x, y
// c.lineTo(300, 100);//x, y
// c.lineTo(400, 300);
// c.lineTo(50, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// //Arc/Circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
// c.stroke();

// c.beginPath()
// c.arc(400, 200, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
// c.stroke();

// for(var i=0; i<10; i++) {
//   c.beginPath()
//   c.arc(110*(i+1), 110, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
//   c.stroke();  
// }

// c.strokeStyle = "#fafafa";
// for(var i=0; i<10; i++) {
//   let x=Math.random();
//   let y=Math.random();
//   c.beginPath()
//   c.arc(110*(i+1), 110, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
//   c.stroke();  
//   c.beginPath()
//   c.arc(x*innerWidth, y*innerHeight, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
//   c.stroke();  
// }
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
    c.strokeStyle = `#fa34a3`;
    c.stroke();
    c.fill();
  }

  this.update = () => {
    if (this.x + this.radius > innerWidth ||
      this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight - this.radius ||
      this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

var circleArr = [];

for(var i=0; i<80; i++) {
  var radius = 20;
  var x = radius + Math.random() * (innerWidth-radius*2);
  var dx = 6 * (Math.random() - 0.5);
  var y = radius + Math.random() * (innerHeight-radius*2);
  var dy = 6 * (Math.random() - 0.5);
  circleArr.push(new Circle(x, y, dx, dy, radius));  
  
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArr.forEach(circle => {
    circle.update();
  })

}

animate();