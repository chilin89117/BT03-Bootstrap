$(document).ready(function () {
	var page = $('div#page').attr('data-page');
	
	$('#navbar li.' + page).addClass('active');	
	$('#navbar li.' + page).siblings().removeClass('active');
	
});