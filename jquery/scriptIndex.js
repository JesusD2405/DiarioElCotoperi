/*Script's Index*/

$(document).ready(function() 
{
	/* Efecto Slider */
	$('.slider').slider({

		//Duracion en milesegundos del Slider por imagen
		interval: 3000 
	
	});

	/* Efecto Dropdown */

	$('.dropdown-button').dropdown({

      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, 	// Does not change width of dropdown to that of the activator
      hover: true, 				// Activate on hover
      gutter: 0, 				// Spacing from edge
      belowOrigin: true, 		// Displays dropdown below the button
      alignment: 'left', 		// Displays dropdown with edge aligned to the left of button
      stopPropagation: false 	// Stops event propagation

    });

    $('.dropdown-button-mobile').dropdown({

      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, 	// Does not change width of dropdown to that of the activator
      hover: false, 				// Activate on hover
      gutter: 0, 				// Spacing from edge
      belowOrigin: false, 		// Displays dropdown below the button
      alignment: 'left', 		// Displays dropdown with edge aligned to the left of button
      stopPropagation: false 	// Stops event propagation

    });

	/* Efecto Carousel */
	$('.carousel').carousel();

	/*Efecto Del Nav*/
	$(".button-collapse").sideNav();


	$('.materialboxed').materialbox();

	/* Efecto Collapsible */
	$('.collapsible').collapsible();

	$('.modal').modal();

	$('.dropdown-button').dropdown('open');

	$('.dropdown-button').dropdown('close');

  $('.parallax').parallax();

});


