//smooth page transition on navbar click
$(document).ready(function(){           
    $(".smooth").on('click', function(event) {      
        // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();      
          // Store hash
          var hash = this.hash;     
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){        
          // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      } // End if
    });
});

//navbar fade in and out on scroll
(function ($) {
  $(document).ready(function(){
    // hide .navbar first
    $("#nav").hide();
    // fade in .navbar
    $(function () {
      $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 100) {
          $('#nav').fadeIn();
        } else {
          $('#nav').fadeOut();
        }
      });
    });
});
}(jQuery));


  //icon reveals
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.revealIcons', {
    duration: 600,
    delay: 200,
    scale: 0.3,
    distance: '0px',
    reset: false
  }, 200);
  sr.reveal('.contactIcons', {
    duration: 1000,
    delay: 600,
    scale: .1,
    reset: false
  });


