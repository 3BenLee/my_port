/*// Fade in navbar background on scroll
$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('nav').addClass('scrolling');
	} else {
		$('nav').removeClass('scrolling');
	}	
});
*/

var $navbar = $('.navbar');
//var $bgPageTwo = $('.bgPageTwo');

//navbar on scroll up
scrollDetector.on( 'scroll:up', function() {

  $navbar.removeClass('hiding');
  $navbar.addClass('showing');

} );

scrollDetector.on( 'scroll:down', function() {

  $navbar.removeClass('showing');
  $navbar.addClass('hiding');

} );

scrollDetector.on( 'at:top', function() {
    
    $navbar.removeClass('showing');
    $navbar.addClass('hiding');
} );

// $bgPageTwo.waypoint(function(direction) {

//   console.log(direction)

//   if (direction == 'up') {

//     $navbar.removeClass('showing');
//     $navbar.addClass('hiding');
//   }
     
// }, {offset: '10%'});


// Fade "Front End Dev" out on scroll
$(window).scroll(function() {

    if ($(window).scrollTop()>0)
     {
        $('.nav-2').fadeOut();
     } else {
      $('.nav-2').fadeIn();
     }
 });

// Waypoints to ease in portfolio thumbnails
var $row = $('.port-flex-row');

$row.waypoint(function(direction) {
    if (direction == 'down') {
        $row.addClass('js-row-animate');
    } else {
        $row.removeClass('js-row-animate');
    }   
}, {offset: '60%'});

// Waypoints to slide in Contact Header 
var $header = $('.header-social');

$header.waypoint(function(direction) {
    if (direction == 'down') {
        $header.addClass('header-social-animate');
    } else {
        $header.removeClass('header-social-animate');
    }   
}, {offset: '80%'});









