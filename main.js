var mouse_event = "empty";
var LPOX , LPOY ;

canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "aqua" ;
width_of_line = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mouse_event = "mouseDown";
   
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    CPOMX = e.clientX-canvas.offsetLeft;
    CPOMY = e.clientY-canvas.offsetTop;

    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color; 
        ctx.lineWidth = width_of_line;

        console.log ("Last Position Of X and Y Coordinates =")
        console.log ("X = "+ LPOX + "Y = "+ LPOY);

        ctx.moveTo(LPOX,LPOY);

        console.log ("Current Position Of X and Y Coordinates =")
        console.log ("X = "+ CPOMX + "Y = " + CPOMY);

        ctx.arc(CPOMX,CPOMY,40,0,2*Math.PI);
        ctx.stroke();
    }

     LPOX = CPOMX;
     LPOY = CPOMY;
}



