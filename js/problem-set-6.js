
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
    let canvas = document.getElementById('canvas1');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '48px sans-serif';
  context.strokeText('Hello, World!', 10, 50);
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
  let canvas = document.getElementById(“canvas2”);
  let ctx = canvas.getContext(“2d”);
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   while(true){
     let width= prompt("Please enter valid width"))
     let height= prompt("Please enter valid height"))
     let x= prompt("Enter a valid topLeft x"))
     let y= prompt("Enter a valid topLeft y"))
     if(width>=1 && height>=1 && x>=5 && y>=5 && canvas.width-x-width>=0 && canvas.height-y-height>=0){
       break;
      }
   ctx.strokeRect(x, y, width, height);


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
let canvas3 = document.getElementById("canvas3");
let color = prompt(“Select a color.");
 let ctx = canvas3.getContext("2d");

  switch(color) {
   case "black":
     ctx.fillStyle = "black";
     break;
   case "blue":
     ctx.fillStyle = "blue";
     break;
   case "green":
     ctx.fillStyle = "green";
     break;
   case "orange":
     ctx.fillStyle = "orange";
     break;
   case "purple":
     ctx.fillStyle = "purple";
     break;
   case "red":
     ctx.fillStyle = "red";
     break;
   case "yellow":
     ctx.fillStyle = "yellow";
     break;
   default:
     alert(color + " is not a supported color. Please try again.");
     break;
   }
     ctx.fillRect(10, 10, 100, 50);

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
  		alert("That is not a valid triangle")
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
   let canvas = document.getElementById('canvas5');
   let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);
  	while(true){
  		radius = Number(prompt("Please enter the radius of the head."));
  		if(radius >= 1 && radius <= canvas.width && Number.isInteger(radius)){
  			break;
  		}
  	}
   let x = canvas.width;
   let y = canvas.height;
   let eyeRadius = radius * .1
   let mouthRadius = radius * .7
   ctx.beginPath();
   ctx.arc(x / 2, y / 2, radius, 0, Math.PI * 2);
   ctx.stroke();



   ctx.beginPath();
   ctx.arc(x / 2 - radius / 3, y / 2 - radius / 4, eyeRadius,0, Math.PI * 2);
   ctx.stroke();



   ctx.beginPath();
   ctx.arc(x / 2 + radius / 3, y / 2 - radius / 4, eyeRadius,0, Math.PI * 2);
   ctx.stroke();



   ctx.beginPath();
   ctx.arc(x / 2, y / 2, mouthRadius,0, Math.PI);
   ctx.stroke();
   }

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
  let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outerRadius=Number(prompt("Enter a valid outer radius"));
      let innerRadius=Number(prompt("Enter a valid inner radius"));
      if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
        let points=5;
        let outerx=[];
        let outery=[];
        let innerx=[];
        let innery=[];
        for(let i=0;i<points;i++){
          outerx.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          outery.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          innerx.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
          innery.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j=0;j<outerx.length;j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j+1], outery[j+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('invalid inputs');
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

   let radius = 40 / Math.sin(0.125 * Math.PI);
   let canvas = document.getElementById('canvas7');
   const context = canvas.getContext('2d');
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.beginPath();
   context.moveTo(Math.cos(0.125 * Math.PI) * radius + 110, Math.sin(0.125 * Math.PI) * radius + 110);
   let x = 0;
   let angle = 0.25 * Math.PI;
   while (x < 8) {
     context.lineTo(Math.cos(0.125 * Math.PI + angle) * radius + 110, Math.sin(0.125 * Math.PI + angle) * radius + 110);
     angle = angle + 0.25 * Math.PI;
     x = x + 1;
   }
   context.closePath();
   context.fillStyle = "red";
   context.fill();
   context.font = "65px Arial";
   context.fillStyle = "white";
   context.fillText("STOP", 22, 130);
   lineWidth = 1;
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

}
