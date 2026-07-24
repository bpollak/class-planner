(function ($) {
  "use strict";

  if (!$) {
    return;
  }

  $(function () {
    var $drawer = $(".navmenu");
    var $menuToggle = $(".navbar-header .navbar-toggle");
    var $navbar = $("#navbar");

    // Off-canvas drawer (Decorator/Jasny). Close the drawer before following
    // an in-page link — navigating while the canvas is slid scrolls to the
    // wrong offset — and keep the MENU button's expanded state accurate.
    if ($.fn.offcanvas) {
      $drawer
        .on("shown.bs.offcanvas", function () {
          $menuToggle.attr("aria-expanded", "true");
        })
        .on("hidden.bs.offcanvas", function () {
          $menuToggle.attr("aria-expanded", "false");
        });

      $drawer.find("a[href^='#']").on("click", function (event) {
        var href = this.getAttribute("href");
        var done = false;
        var go = function () {
          if (done) {
            return;
          }
          done = true;
          $menuToggle.attr("aria-expanded", "false");
          window.location.hash = href;
        };

        event.preventDefault();
        $drawer.one("hidden.bs.offcanvas", go);
        window.setTimeout(go, 450);
        $drawer.offcanvas("hide");
      });
    }

    // Highlight the guide section currently in view. Navigation still works
    // without this; scrollspy only moves the .active state and aria-current.
    if ($.fn.scrollspy) {
      $("body")
        .scrollspy({ target: ".navbar", offset: 80 })
        .on("activate.bs.scrollspy", function () {
          $navbar.find("a[aria-current]").removeAttr("aria-current");
          var $active = $navbar.find("li.active > a");
          $active.attr("aria-current", "true");

          // Mirror the active section into the mobile drawer.
          var href = $active.attr("href");
          $drawer.find("li").removeClass("active");
          $drawer.find("a[href='" + href + "']").parent().addClass("active");
        });
    }
  });
})(window.jQuery);
