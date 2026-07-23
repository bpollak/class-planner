(function ($) {
  "use strict";

  if (!$) {
    return;
  }

  $(function () {
    var $navbar = $("#navbar");

    $("#navbar a[href^='#']").on("click", function () {
      if ($navbar.hasClass("in")) {
        $navbar.collapse("hide");
      }
    });

    // Highlight the guide section currently in view. Navigation still works
    // without this; scrollspy only moves the .active state and aria-current.
    if ($.fn.scrollspy) {
      $("body")
        .scrollspy({ target: ".navbar", offset: 80 })
        .on("activate.bs.scrollspy", function () {
          $navbar.find("a[aria-current]").removeAttr("aria-current");
          $navbar.find("li.active > a").attr("aria-current", "true");
        });
    }
  });
})(window.jQuery);
