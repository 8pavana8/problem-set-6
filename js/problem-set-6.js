
/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */
function sayHello() {

 let hello = document.getElementById("canvas1").getContext('2d')
 hello.font = '48px sans-serif';
 hello.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  
let height = prompt("Input rectangle height.");
let width = prompt("Input rectangle width.");
let xCoord = prompt("Input x coordinate.");
let yCoord = prompt("Input y coordinate.");
let rectangle = document.getElementById("canvas2");
if (rectangle.getContext){
  let drawing = rectangle.getContext("2d");
  drawing.strokeRect(xCoord, yCoord, width, height);
}
}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let colrectangle = document.getElementById("canvas3");
  let draw = rec.getContext("2d");
  draw.clearRect(0, 0, colrectangle.width, colrectangle.height);

  let color;
  while(true){
    color=prompt("Input a valid color")
    if(color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") { {
      break;
    }
  }
  draw.fillStyle=color;
  draw.fillColrectangle(10,10,100,50);
}
/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
let x=10;
  let y=10;
  let a;
  let b;
  let c;
  let canvas = document.getElementById("canvas4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  while(true){
	a=Number(prompt("Enter side 1 length"));
	b=Number(prompt("Enter side 2 length"));
	c=Number(prompt("Enter side 3 length"));
	if(((a**2) + (b**2) == (c**2)) && a>0 && b>0 && c>0 && canvas.width-x-a>=0 && canvas.height-y-b>=0){
		break;
	}else{
		alert("Not a valid triangle")
	}
  }

 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x,y+a);
 context.stroke();

 context.beginPath();
 context.moveTo(x,y+a);
 context.lineTo(x+b,y+a);
 context.stroke();

 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x+b,y+a);
 context.stroke();

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
 let radius;
  let canvas = document.getElementById("canvas5");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius=Number(prompt("Input radius"));
		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x=canvas.width;
  let y=canvas.height;
  let eyeRadius=radius*.1
  let mouthRadius=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2); // Face
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2 - radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2+radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2, y/2, mouthRadius,0, Math.PI);
  ctx.stroke();
  }



/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let star = document.getElementById("canvas6").getContext('2d');
let outerRadius = Number(prompt(" Choose Outer Radius:"));
  let innerRadius = Number(prompt(" Choose Inner Radius:"));
  let canvas = document.getElementById('canvas6');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (isNaN(outerRadius) == true || isNaN(innerRadius) == true) {
    alert("One input is not a number.");
  } else if (outerRadius < 2) {
    alert("Outer radius is too small.");
  } else if (innerRadius < 1) {
    alert("Inner radius is too small.");
  } else if (outerRadius <= innerRadius) {
    alert("Outer radius must be larger than inner radius.")
  } else {
    context.beginPath();
    context.moveTo(125, 125 - outerRadius);
   let x = 0;
    let angle = 0 * Math.PI;
    while (x < 5) {
      context.lineTo(Math.cos(1.3 * Math.PI - angle) * innerRadius + 125, Math.sin(1.3 * Math.PI - angle) * innerRadius + 125);
      context.lineTo(Math.cos(1.1 * Math.PI - angle) * outerRadius + 125, Math.sin(1.1 * Math.PI - angle) * outerRadius + 125);
      angle = angle + 0.4 * Math.PI;
      x = x + 1;
  }
  context.closePath();
  context.stroke();
  lineWidth = 1;
}
}


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas7 = document.getElementById("canvas7");
  let ctx = canvas7.getContext('2d');
  ctx.clearRect(0, 0, canvas7.width, canvas7.height);
  let sideLength=80;
  let center=[10+(sideLength)/2+sideLength/Math.sqrt(2), 10+(sideLength/2)+(sideLength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let a=0;a<points;a++){
    pointx.push(Math.cos(((Math.PI*2*a)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*a)/points)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let y=0;y<pointx.length;y++){
    ctx.lineTo(pointx[y], pointy[y]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="65px sans-serif";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}


/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
 let canvas8 = document.getElementById('canvas8');
  let ctx = canvas8.getContext('2d');
  ctx.clearRect(0, 0, canvas8.width, canvas8.height);
  let sideLength=Number(prompt("enter a side length"));
  let x=10;
  let y=canvas8.height-10;
  let i=0;
  lineNumber=1;
  while(i<5){
    for(let j=0+lineNumber;j<=5;j++){
      ctx.strokeRect(x,y-sideLength,sideLength,sideLength);
      x+=sideLength;
    }
    x=10+(sideLength/2)*lineNumber;
    y-=sideLength;
    lineNumber++;
    i++;
  }

}
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
   let canvas9 = document.getElementById('canvas9');
    let ctx = canvas9.getContext('2d');
    ctx.clearRect(0, 0, canvas9.width, canvas9.height);

    while(true){
    doorColor = prompt("Choose door color.");
    houseColor = prompt("Choose house color.");
    if((doorColor=="blue" || doorColor=="green" || doorColor=="brown" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
    && (houseColor=="blue" || houseColor=="green" || houseColor=="brown" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
      break;
    }
    else{
        alert("One color is not valid. Please try again.")
    }
  }
  let x = 150;
  let houseLength = 500;
  let houseHeight = 400;
  let y = canvas9.height-houseHeight-10;
  ctx.beginPath();
  ctx.fillStyle = houseColor;
  ctx.fillRect(x,y,houseLength,houseHeight);
  ctx.fillStyle = doorColor;
  ctx.fillRect(x+(houseLength/2)-30,y+300,60,100);
  ctx.fillStyle="gray";
  ctx.moveTo(x,y);
  ctx.lineTo(x+286,150);
  ctx.lineTo(x+houseLength,y);
  ctx.lineTo(x,y);
  ctx.fill();
  ctx.fillStyle="#ADD8E6";
  ctx.fillRect(300,y+100, 50, 50);
  ctx.fillRect(526,y+100, 50, 50);
  ctx.fillRect(300,y+200, 50, 50);
  ctx.fillRect(526,y+200, 50, 50);
  ctx.closePath();

}
}
