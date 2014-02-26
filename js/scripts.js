// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	// Grid View
	$('#grid-view').on('click', function(){

		// Remove default class, 'large-6'
		$('.gallery div').removeClass('large-6');

		// Add 'large-3' class
		$('.gallery div').addClass('large-3');

		// Hide Paragraphs
		$('p').hide();

	});

	// List View
	$('#list-view').on('click', function(){

		// Remove existing class of 'large-3'
		$('.gallery div').removeClass('large-3');

		// Add 'large-6' class
		$('.gallery div').addClass('large-6');

		// Show paragraphs
		$('p').show();

	});

	console.log('Page Loaded. Lets Do this!');

}); 
