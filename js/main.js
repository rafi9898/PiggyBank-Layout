//Show and Hid Menu
$(document).ready(function() {
   'use strict';
    
    $(window).scroll(function() {
        
       'use strict';
        
        if($(window).scrollTop() < 80 ) {
            $('.navbar-default').css({
                'opacity': '1',
                'background': "transparent",
                 "border-color": "transparent"
                    
            });
            
        $(".navbar-nav > li > a").css({
            "color": "black",
            "font-weight": 500
        });
            
         $(".navbar-nav > li > a").mouseover(function() {
            $(this).css("color","#fc869a");
            $(this).css("font-weight","bolder");
        }).mouseout(function() {
            $(this).css("color","black");
            $(this).css("font-weight","500");
        });
            
        } 
        
        else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1',
                
            });
            
        $(".navbar-default").css({
            "background-color": "#242424",
            "border-color": "#444"
        });
        
        $(".navbar-brand img").css({
           "height": "35",
            "padding-top": "0px"
        });
        
        
         $(".navbar-nav > li > a").mouseover(function() {
            $(this).css("color","#fc869a");
            $(this).css("font-weight","bolder");
        }).mouseout(function() {
            $(this).css("color","white");
            $(this).css("font-weight","bolder");
        });
            
        $(".navbar-nav > li > a").css({
           "padding-top": "15px",
            "color": "white",
            "font-weight": "bolder"
        });
        }
        

        
    });
});



//Add Scrolling Page


$('.nav-item, #scroll-to-top')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



// Active menu item on click

$(document).ready(function() {
   'use strict';
    
    $(".navbar-nav li a").click(function() {
       'use strict';
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
        
    });
    
    //$(".navbar-nav li a").parent
});





// Active Menu on Scroll

$(document).ready(function() {
   'use strict';
    
    $(window).scroll(function() {
    
        
        'use strict';    
        
        
        $("section").each(function() {
           
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            
            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            }
            else {
               $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active"); 
            }
            
        });
        
    });
    
});




//Auto write

var typed = new Typed('.element', {
  strings: ["Add your money saving statistics.", "Our system is completely free.", "An easy and quick way to save your money.", "Everything at your fingertips."],
  typeSpeed: 50
});




// ADD Animation and WOW 

$(document).ready(function() {
    
    'use strict';
    
   new WOW().init(); 
});



//Hidden preloader
