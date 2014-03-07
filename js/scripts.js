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
		// $('p').hide();

	});

	// List View
	$('#list-view').on('click', function(){

		// Remove existing class of 'large-3'
		$('.gallery div').removeClass('large-3');

		// Add 'large-6' class
		$('.gallery div').addClass('large-6');

		// Show paragraphs
		// $('p').show();

	});

	$("#featured").on("ready.fndtn.orbit", function(event) {
	  console.info("ready");
	});
	$("#featured").on("before-slide-change.fndtn.orbit", function(event, orbit) {
	  console.info("before slide change");
	});  

	$("#featured").on("after-slide-change.fndtn.orbit", function(event, orbit) {
	  console.info("after slide change");
	  console.info("slide " + orbit.slide_number + " of " + orbit.total_slides);

		if (orbit.slide_number == 1) {
		  	$( "p[data-orbit-link|='slide-1']" ).hide();
		  	$( "p[data-orbit-link|='slide-2']" ).show( "slow" );
		  	$( "a[data-orbit-link|='slide-2']" ).animate({
					    opacity: 0.5,
					    up: "+=.25",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "a[data-orbit-link|='slide-1']" ).animate({
					    opacity: 1,
					    up: "+= 0",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "p[data-orbit-link|='slide-3']" ).hide();
		  	$( "p[data-orbit-link|='slide-4']" ).hide();
		  	$( "p[data-orbit-link|='slide-5']" ).hide();
	  }
	  else if (orbit.slide_number == 2) {
	  		$( "p[data-orbit-link|='slide-1']" ).hide();
		  	$( "p[data-orbit-link|='slide-2']" ).hide();
		  	$( "p[data-orbit-link|='slide-3']" ).show( "slow" );
		  	$( "a[data-orbit-link|='slide-3']" ).animate({
					    opacity: 0.5,
					    up: "+=.25",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "a[data-orbit-link|='slide-2']" ).animate({
					    opacity: 1,
					    up: "+= 0",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "p[data-orbit-link|='slide-4']" ).hide();
		  	$( "p[data-orbit-link|='slide-5']" ).hide();	  	
	  }
	  else if (orbit.slide_number == 3) {
	  		$( "p[data-orbit-link|='slide-1']" ).hide();
		  	$( "p[data-orbit-link|='slide-2']" ).hide();
		  	$( "p[data-orbit-link|='slide-3']" ).hide();
		  	$( "p[data-orbit-link|='slide-4']" ).show( "slow" );
		  			  	$( "a[data-orbit-link|='slide-4']" ).animate({
					    opacity: 0.5,
					    up: "+=.25",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  			  			  	$( "a[data-orbit-link|='slide-3']" ).animate({
					    opacity: 1,
					    up: "+= 0",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "p[data-orbit-link|='slide-5']" ).hide();	  	
	  }
	  else if (orbit.slide_number == 4) {
	  		$( "p[data-orbit-link|='slide-1']" ).hide();
		  	$( "p[data-orbit-link|='slide-2']" ).hide();
		  	$( "p[data-orbit-link|='slide-3']" ).hide();
		  	$( "p[data-orbit-link|='slide-4']" ).hide();
		  	$( "p[data-orbit-link|='slide-5']" ).show( "slow" );
		  	$( "a[data-orbit-link|='slide-5']" ).animate({
					    opacity: 0.5,
					    up: "+=.25",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
				$( "a[data-orbit-link|='slide-4']" ).animate({
					    opacity: 1,
					    up: "+= 0",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});	  	
	  }
	  else {
	  		$( "p[data-orbit-link|='slide-1']" ).show( "slow" );
	  		$( "a[data-orbit-link|='slide-1']" ).animate({
					    opacity: 0.5,
					    up: "+=.25",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
	  		$( "a[data-orbit-link|='slide-5']" ).animate({
					    opacity: 1,
					    up: "+= 0",
					    height: "slide"
					  }, 100, function() {
					    // Animation complete.
					});
		  	$( "p[data-orbit-link|='slide-2']" ).hide();
		  	$( "p[data-orbit-link|='slide-3']" ).hide();
		  	$( "p[data-orbit-link|='slide-4']" ).hide();
		  	$( "p[data-orbit-link|='slide-5']" ).hide();	  	
	  } 

	});

	$("#featured").on("timer-started.fndtn.orbit", function(event, orbit) {
	  console.info("timer started");
	});
	$("#featured").on("timer-stopped.fndtn.orbit", function(event, orbit) {
	  console.info("timer stopped");
	});
	console.log('Page Loaded. Lets Do this!');
	$( "p[data-orbit-link|='slide-1']" ).show( "slow" );
	$( "p[data-orbit-link|='slide-2']" ).hide();
	$( "p[data-orbit-link|='slide-3']" ).hide();
	$( "p[data-orbit-link|='slide-4']" ).hide();
	$( "p[data-orbit-link|='slide-5']" ).hide();
}); 
