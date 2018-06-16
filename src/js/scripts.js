
var $navbar = $('.navbar');

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


// Waypoints to ease in Portfolio Header
var $portHeader = $('.portfolio-header');

$portHeader.waypoint(function(direction) {
    if (direction == 'down') {
        $portHeader.addClass('portfolio-header-animate');
    } else {
        $portHeader.removeClass('portfolio-header-animate');
    }   
}, {offset: '80%'});

// Waypoints to ease in Contact Header 
var $header = $('.header-social');

$header.waypoint(function(direction) {
    if (direction == 'down') {
        $header.addClass('header-social-animate');
    } else {
        $header.removeClass('header-social-animate');
    }   
}, {offset: '80%'});

// Contact Form JS

$(function() {
  
  // contact form animations
  $('#envelope').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});








