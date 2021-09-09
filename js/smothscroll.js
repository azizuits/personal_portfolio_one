// https://twitter.com/uixmat

function scrollNav() {
    $('.navbar-nav li a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 1000);
      return false;
    });
  }
  scrollNav();