/*Script's Index*/

$(document).ready(function() 
{
	/* Efecto Slider */
	$('.slider').slider({

		//Duracion en milesegundos del Slider por imagen
		interval: 3000 
	
	});

	/* Efecto Carousel */
	$('.carousel').carousel();

	/*Efecto Del Nav*/
	$(".button-collapse").sideNav();


	$('.materialboxed').materialbox();

	/* Efecto Collapsible */
	$('.collapsible').collapsible();

	$('.modal').modal();
});