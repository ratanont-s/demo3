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

  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }

  // Review slide
  $("#review .review").slick({
    // Option
    arrows: false,
    dots: true,
    autoplay: true
  });
});
