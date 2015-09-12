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


	$("#rect").mouseover(function(){
		$("#rect").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/Info1.jpg");
		});
	});

	$("#rect").mouseout(function(){
		$("#rect").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/TextYaLaterHiResIcon.jpg");
		});
	});

	$("#rect2").mouseover(function(){
		$("#rect2").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/noteworthy.jpg");
		});
	});

	$("#rect2").mouseout(function(){
		$("#rect2").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/note_launcher.jpg");
		});
	});

	$("#rect3").mouseover(function(){
		$("#rect3").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/muleinfo.jpg");
		});
	});

	$("#rect3").mouseout(function(){
		$("#rect3").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/MULE.jpg");
		});
	});

	$("#rect4").mouseover(function(){
		$("#rect4").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/authinfo.jpg");
		});
	});

	$("#rect4").mouseout(function(){
		$("#rect4").fadeOut(function() {
		  $(this).load(function() { $(this).fadeIn(); });
		  $(this).attr("src", "Images/auth.jpg");
		});
	});

});

$(document).ready(function(){
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});
});

$(window).scroll(function() {

    if ($(this).scrollTop()>7)
    {
    	$('.message_box').fadeTo("slow",0);
    }
});
