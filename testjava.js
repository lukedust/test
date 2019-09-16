var my_canvas = document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.fillStyle="green";
context.fillRect(0, 0, 200, 300);
context.fillStyle="white";
context.fillRect(200, 0, 200, 300);
context.fillStyle="orange";
context.fillRect(500, 200, 200, 300);
