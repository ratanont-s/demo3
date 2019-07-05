$(function() {
  // Toggle search
  $("#formSearch").hide();
  $("#toggleSearch").click(function() {
    $("#formSearch").toggle();
    $(this).hide();
  });

  // Banner slide
  $("#banner.carousel").carousel({
    interval: 8000
  });

  // Review slide
  $("#review .review").slick({
    // Option
    arrows: false,
    dots: true,
    autoplay: true
  });
});
