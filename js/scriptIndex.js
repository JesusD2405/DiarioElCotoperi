/* Interaccion de Js Con Las Funciones Principales */

$(document).ready(function() 
{
    /* Evento caruosel */
    $('.carousel').carousel();
    //$('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 2); // Move next n times.

    /* Evento Slider */
    $('.slider').slider();
    $('.slider').slider('next');
  
});