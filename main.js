/* Dasupply Template 01 — behaviour
   Two things only: the GMT clock in the navbar, and the mobile menu. */

(function () {
  "use strict";

  /* --- Live GMT clock ---------------------------------------------------
     The Figma navbar shows "16:28:52 (GMT)". It's a real clock, not a label. */
  var clock = document.querySelector("[data-clock]");

  if (clock) {
    var tick = function () {
      var now = new Date();
      var pad = function (n) {
        return String(n).padStart(2, "0");
      };
      clock.textContent =
        pad(now.getUTCHours()) +
        ":" +
        pad(now.getUTCMinutes()) +
        ":" +
        pad(now.getUTCSeconds()) +
        " (GMT)";
    };

    tick();
    setInterval(tick, 1000);
  }

  /* --- Mobile menu ------------------------------------------------------- */
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");

  if (nav && toggle) {
    var iconMenu = toggle.querySelector("[data-icon-menu]");
    var iconClose = toggle.querySelector("[data-icon-close]");

    var setOpen = function (open) {
      nav.classList.toggle("nav--open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (iconMenu) iconMenu.style.display = open ? "none" : "block";
      if (iconClose) iconClose.style.display = open ? "block" : "none";
    };

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("nav--open"));
    });

    // Escape closes it, and returns focus to the button.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("nav--open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset when resizing back up to desktop.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) setOpen(false);
    });
  }
})();
