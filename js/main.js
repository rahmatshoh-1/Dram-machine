$(function () {
	$(this).keydown(function(){
		var key = $(this).find('.alphabet[data-key='+event.which+']');
		var audio = $(this).find('audio[data-key='+event.which+']')[0];
		key.toggleClass('gold');
		audio.play();
		audio.currentTime = 0;
	})
	$(this).keyup(function(){
		var key = $(this).find('.alphabet[data-key='+event.which+']');
		key.toggleClass('gold');
	})
})

