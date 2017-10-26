var canvas = document.querySelector('canvas');

console.log(canvas)

canvas.width = window.innerWidth;    // Gets width
canvas.height = window.innerHeight;  // Gets height

var c = canvas.getContext('2d');// Extends canvas to let us use 2d elements 

c.fillStyle = 'rgba(255, 0, 0, .1)'
c.fillRect(100, 100, 100, 100)  // x, y, width, height, creates a box on screen
c.fillStyle = 'rgba(0, 255, 0, .1)'
c.fillRect(400, 300, 200, 100)  // x, y, width, height, creates a box on screen
c.fillRect(250, 200, 100, 300)  // x, y, width, height, creates a box on screen

// 2. Drawing on the Canvas
// Line
c.beginPath();
c.moveTo(50, 300); // x, y
c.lineTo(300, 100);//x, y
c.lineTo(400, 300);
c.lineTo(50, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

//Arc/Circle
c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
c.stroke();

c.beginPath()
c.arc(400, 200, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
c.stroke();

for(var i=0; i<10; i++) {
  c.beginPath()
  c.arc(110*(i+1), 110, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
  c.stroke();  
}

c.strokeStyle = "#fafafa";
for(var i=0; i<10; i++) {
  let x=Math.random();
  let y=Math.random();
  c.beginPath()
  c.arc(110*(i+1), 110, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
  c.stroke();  
  c.beginPath()
  c.arc(x*innerWidth, y*innerHeight, 30, 0, Math.PI * 2, false) // x, y, radius, startAngle: Float (radians), endAngle: Float (radians), drawCounterClockwise: Bool
  c.stroke();  
}
