(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
  
  //alt collapse scroll from stackoverflow because main isn't working
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });


 

  
//need this to deactivate lightbox on small screens
$(document).ready(function () {
  
  lightboxOnResize();
 
});

$(window).resize(function() {
  lightboxOnResize();

});

//***ISOTOPE***
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



/*
$('#filters a').on("click", function(){
  var selector = $(this).attr('data-filter'); 
  $('#container').isotope({ filter: selector }, function(){
    if(selector == "*"){
     $(".fancybox").attr("data-fancybox-group", "gallery");
    } else{ 
     $(selector).find(".fancybox").attr("data-fancybox-group", selector);
    }
  });
  return false;
});
*/



// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$(document).ready(function(){
  $grid = $('.list').isotope({
    // options
    itemSelector: '.list__item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 0
    }
  });
  // filter items on button click
  $('.js-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $( '.js-filter button' ).removeClass( 'is-active' );
    $( this ).addClass( 'is-active' );
  });
});

$("#list").click(function() {
  $(this).attr('width', '400');
   $(this).attr('height', '300');
});

// CLICK TO ENLARGE IMAGES SCRIPT

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});
        $("a.grouped_elements").fancybox();
    
        $('[data-fancybox="gallery"]').fancybox({
          // Options will go here
        });

        $(document).ready(function() {
          $(".fancybox-media").fancybox({
              openEffect  : 'none',
              closeEffect : 'none',
              helpers : {
                  media : {}
              }
          });
      });

})(jQuery); // End of use strict

