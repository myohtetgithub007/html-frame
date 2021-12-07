jQuery(function ($) {
  $(function () {
    var scroll_func = function () {
      $("html,body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        "slow",
        "swing"
      );
      return false;
    };
    $(function () {
      $('a[href^="#"]').not('[href$="#"]').click(scroll_func);
    });
  });
  /* =========================================
   *  Slick Slider
   * ========================================= */
});
