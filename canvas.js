var canvas = document.getElementById("draw");
var growing = document.getElementById("growing");
var stop = document.getElementById("stop");
var context = canvas.getContext("2d");
var shrink = false;
var requestID;
stop.addEventListener('click', function(){
    window.cancelAnimationFrame(requestID);
});

growing.addEventListener('click', function(){
    window.cancelAnimationFrame(requestID);
    var x = 10;
    var drawcircle = function(){
	context.clearRect(0,0,500,500);
	context.beginPath();
	context.arc(250,250,x,0, 2* Math.PI);
	context.fill();
	if(x  >= 250){
	    shrink = true;
	}
	if(x <= 0){
	    shrink = false;
	}
	if(shrink){
	    x-=1;
	}
	else{ x+=1;}
	requestID = window.requestAnimationFrame(drawcircle);
};
    drawcircle();
});
