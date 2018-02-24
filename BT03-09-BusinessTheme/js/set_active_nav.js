/* Navbar is common to all pages, so this script sets
*  the current '#navbar ul li' item to 'active'  */

$(document).ready(function () {
	var thisPage = $('.section-title h1').text();
	thisPage = thisPage.substring(0,thisPage.indexOf(' ')).trim();

	$('#navbar ul li a').removeClass('active');
	
	switch(thisPage) {
		case 'About':
			$('#navbar ul li a[href="about.php"]').addClass('active');
			break;
		case 'Services':
			$('#navbar ul li a[href="services.php"]').addClass('active');
			break;
		case 'Contact':
			$('#navbar ul li a[href="contact.php"]').addClass('active');
			break;
		default:
			$('#navbar ul li a[href="index.php"]').addClass('active');
	}
});