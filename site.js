/* antoinejosnin.fr — menu mobile, portrait, mosaïques, événements Plausible. Tout fonctionne sans JS. */
(function () {
  "use strict";
  var d = document;

  /* ----- Menu mobile ----- */
  var burger = d.querySelector(".burger");
  var menu = d.getElementById("menu");
  if (burger && menu) {
    var closeBtn = menu.querySelector(".menu-close");
    var others = [].slice.call(d.body.children).filter(function (el) { return el !== menu && el.tagName !== "SCRIPT"; });
    var focusables = function () {
      return [].slice.call(menu.querySelectorAll("a[href], button:not([disabled])"));
    };
    var open = function () {
      menu.hidden = false;
      d.body.classList.add("menu-open");
      burger.setAttribute("aria-expanded", "true");
      others.forEach(function (el) { el.inert = true; });
      closeBtn.focus();
    };
    var close = function (restore) {
      menu.hidden = true;
      d.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
      others.forEach(function (el) { el.inert = false; });
      if (restore !== false) burger.focus();
    };
    burger.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) close(false);
    });
    menu.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      var items = focusables();
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ----- Portrait : chaque clic passe à l'angle suivant ----- */
  var angles = [-12, 10, -4, 16, -18, 6];
  [].forEach.call(d.querySelectorAll(".portrait--hero"), function (p) {
    var i = 0;
    p.addEventListener("click", function () {
      i = (i + 1) % angles.length;
      p.style.setProperty("--tilt", angles[i] + "deg");
    });
  });

  /* ----- Mosaïques : le clic met la capture au premier plan ----- */
  [].forEach.call(d.querySelectorAll(".mosaic"), function (m) {
    var shots = [].slice.call(m.querySelectorAll(".shot"));
    var count = m.querySelector(".mosaic-count");
    if (shots.length < 2) return;
    var top = 10;
    shots.forEach(function (s, idx) {
      s.addEventListener("click", function () {
        s.style.setProperty("--z", ++top);
        if (count) {
          count.hidden = false;
          count.textContent = (idx + 1) + " / " + shots.length + " →";
        }
      });
    });
  });

  /* ----- Plausible : événements Visio et Store ----- */
  d.addEventListener("click", function (e) {
    var a = e.target.closest("[data-event]");
    if (a && window.plausible) window.plausible(a.getAttribute("data-event"));
  });
})();
