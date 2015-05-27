$(document).ready(function(){ /* Smooth Scrolling Function */
	$('a[href^="#"]').on('click',function (e) {

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-80
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	        return false;
	    });
	    return false;
	});
});

$(function play(){
	var player = document.getElementById("player");
	//player.play();
});

$(document).ready(play());

