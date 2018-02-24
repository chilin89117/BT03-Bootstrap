// Change navbar appearance when scrolled 50px ------------
$(window).scroll(function() {
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

$(document).ready(function () {
	// When link in navbar is clicked... --------------------
	$('.page-scroll a').on('click', function(event) {
		var anchor = $(this);
		
		// ...stop current animation and start a new one. -----
		
		// Find the vertical position of the target, and ------
		//		scroll to it using easing method in plug-in -------
		//		from 'gsgd.co.uk/sandbox/jquery/easing' -----------
		
		$('html,body').stop()
						 			.animate({
										scrollTop: $(anchor.attr('href')).offset().top						 
						 			}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});
