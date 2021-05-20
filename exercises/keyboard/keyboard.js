window.onkeypress = function() {
	
	  var red = Math.random() * 255;
	  var green = Math.random() * 255;
	  var blue = Math.random() * 255;
	  document.body.style.backgroundColor = 'rgb('+
		  red+','+
		  green+','+
		  blue+')';

}