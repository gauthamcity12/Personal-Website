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

function play(){
	var player = document.getElementById("player");
	//player.play();
};

$(document).ready(play());

$(document).ready(function(){
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});
});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.message_box').fadeOut();
     }
    else
     {
      $('.message_box').fadeIn();
     }
});


