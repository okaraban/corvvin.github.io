$(document).ready(function(){

	const headerSlider = $('#headerSlider');
	
	headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function(event){
		$('.slide-controls-number__active').text(event.item.index + 1)
		$('.slide-controls-number__total').text(event.item.count)
	})

	headerSlider.owlCarousel({
		items: 1,
		// loop: true,
		dots: false,
		smartSpeed: 1500,
	});
	// Go to the previous item
	$('#headerSliderLeft').click(function() {
	   // With optional speed parameter
	   // Parameters has to be in square bracket '[]'
	   headerSlider.trigger('prev.owl.carousel');
	})
	// Go to the next item
	$('#headerSliderRight').click(function() {
		headerSlider.trigger('next.owl.carousel');
	})

	headerSlider.on('changed.owl.carousel', function(event){
		$('.slide-controls-number__active').text(event.item.index + 1)
		$('.slide-controls-number__total').text(event.item.count)
	})

});