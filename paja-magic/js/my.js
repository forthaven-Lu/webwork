$(document).ready(function(){
  // $('.moreinfo').on('click',function(event){
  //   $('.sleeping2').css("margin-top","-10vh");
  // });
  $('.pajamago').delay(5000).fadeIn(1000);
$('.start').on('click',function(){
  $('.loading-page').hide();
  $('.content').fadeIn(1000);
});


  // Click scroll animation
  $('.carousel').carousel();
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
});
