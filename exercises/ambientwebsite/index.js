
window.onload = function() {

function lerp( val1, val2, amt )
{
 var diff = Math.abs( val2 - val1 );
 return val1 + diff*amt;
}


var d = new Date();
var hour = d.getHours()

var lerpValue = hour / 23;
var lerpColor = lerp( 0, 255, lerpValue );
document.body.style.backgroundColor = 'rgb('+
		  lerpColor+','+
		  lerpColor+','+
		  lerpColor+')';

}

