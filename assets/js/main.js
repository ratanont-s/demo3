$(function () {
  // Toggle search
  $("#formSearch").hide();
  $("#toggleSearch").click(function () {
    $("#formSearch").toggle();
    $(this).hide();
  });

  // Banner slide
  $('#bannerSlide .banner').on('init', function (e, slick) {
    var $firstAnimatingElements = $('div.banner-item:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  $('#bannerSlide .banner').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  $("#bannerSlide .banner").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
      }
    }]
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
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