(function () {
  "use strict";

  function initMobileNav() {
    var burger = document.querySelector(".burger");
    var mobileNav = document.querySelector(".nav-mobile");
    if (!burger || !mobileNav) return;

    function closeNav() {
      mobileNav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }

    function toggleNav() {
      var open = mobileNav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNav();
    });

    document.addEventListener("click", function (e) {
      if (!mobileNav.classList.contains("open")) return;
      var t = e.target;
      if (t instanceof Node && !mobileNav.contains(t) && !burger.contains(t)) {
        closeNav();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
