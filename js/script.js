$(document).ready(function(){
	$('#beginButton').click(function(){
		$('html, body').animate({
			scrollTop: ($('.wrapper2').first().offset().top)},1000);	
	});
	$('#secondButton').click(function(){
		$('html, body').animate({
			scrollTop: ($('.outerDiv').first().offset().top)},1000);	
	});
	$('#history').click(function(){
		$('html, body').animate({
			scrollTop: ($('.wrapper2').first().offset().top)},1000);	
	});
	$('#artists').click(function(){
		$('html, body').animate({
			scrollTop: ($('.outerDiv').first().offset().top)},1000);	
	});
});