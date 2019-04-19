$(document).ready(function(){

	const shopSlider = $('#shopSlider');

	shopSlider.owlCarousel({
		loop: true,
		dots: false,
		smartSpeed: 500,
		margin: 2,
		responsive: {
			// breakpoint from 0 up
			0 : {
				items: 1,
			},
			// breakpoint from 1200 up
			1254 : {
				items: 3,
			}
		}
	});
	// Go to the previous item
	$('#shopSliderLeft').click(function() {
	   // With optional speed parameter
	   // Parameters has to be in square bracket '[]'
	   shopSlider.trigger('prev.owl.carousel');
	})
	// Go to the next item
	$('#shopSliderRight').click(function() {
		shopSlider.trigger('next.owl.carousel');
	})

});