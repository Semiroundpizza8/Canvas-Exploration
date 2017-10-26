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

var maxRadius = 60;

var colorArray = [
  '#BE4248',
  '#21374B',
  '#586473',
  '#4A89AA'
]

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;    // Gets width
  canvas.height = window.innerHeight;  // Gets height
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor((Math.random() * colorArray.length)) - 1]

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
    c.fillStyle = this.color;
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

    // Interactivity
    let xDist = Math.abs(this.x - mouse.x);
    let yDist = Math.abs(this.y - mouse.y);

    if (xDist < 80 && yDist < 80) {
      if (this.radius < maxRadius) this.radius++;
    } else if (this.radius > this.minRadius) {
      this.radius--;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArr.forEach(circle => {
    circle.update();
  })

}

var circleArr = [];

function init() {
  for (var i = 0; i < 400; i++) {
    var radius = Math.random() * 7 + 3;
    var x = radius + Math.random() * (innerWidth - radius * 2);
    var dx = 6 * (Math.random() - 0.5);
    var y = radius + Math.random() * (innerHeight - radius * 2);
    var dy = 6 * (Math.random() - 0.5);
    circleArr.push(new Circle(x, y, dx, dy, radius));
  
  }
}

init();

animate();