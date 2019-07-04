$(function() {
  // Toggle search
  $("#formSearch").hide();
  $("#toggleSearch").click(function() {
    $("#formSearch").toggle();
    $(this).hide();
  });

  // Review slide
  $("#review .review").slick({
    // Option
    arrows: false,
    dots: true,
    autoplay: true
  });
});
