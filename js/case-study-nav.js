/**
 * Case study sidebar nav — active link highlighting + smooth scroll
 * ──────────────────────────────────────────────────────────────────
 * • Intercepts cs-nav clicks and animates scroll with a cubic ease-in-out
 *   curve over 1100 ms, landing the section heading below the sticky nav.
 * • Uses a throttled scroll listener to keep the active link in sync
 *   while scrolling naturally or via the animated scroll.
 *
 * Usage — add to case study pages (after includes.js):
 *   <script src="../js/case-study-nav.js"></script>
 */
(function () {
  var navLinks = document.querySelectorAll('.cs-nav-link');
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').replace('#', '');
    var anchor = document.getElementById(id);
    if (anchor) {
      sections.push({ id: id, el: anchor.parentElement });
    }
  });

  if (!sections.length) return;

  /* ── Update active link based on scroll position ──────────────────── */
  function updateActiveLink() {
    // The "trigger line" sits 25% down from the top of the viewport.
    // We walk the sections from last to first and pick the first one
    // whose top has scrolled above this line.
    var trigger = window.innerHeight * 0.25;
    var activeId = sections[0].id; // default to the first section

    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].el.getBoundingClientRect().top <= trigger) {
        activeId = sections[i].id;
        break;
      }
    }

    navLinks.forEach(function (link) {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + activeId
      );
    });
  }

  // Set initial state
  updateActiveLink();

  // Throttle via requestAnimationFrame.
  // `scrollingToTarget` suppresses updates during click-initiated scrolls
  // so the indicator doesn't hop through intermediate sections.
  var ticking = false;
  var scrollingToTarget = false;

  window.addEventListener('scroll', function () {
    if (scrollingToTarget) return;
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ── Easing ─────────────────────────────────────────────────────── */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 7);
  }

  /* ── Animated scroll ─────────────────────────────────────────────── */
  function scrollToSection(target) {
    var DURATION = 1100; // ms

    var startY   = window.scrollY;
    var targetY  = target.getBoundingClientRect().top + startY;
    var distance = targetY - startY;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / DURATION, 1);
      window.scrollTo(0, startY + distance * easeOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        scrollingToTarget = false;
      }
    }

    requestAnimationFrame(step);
  }

  /* ── Click handler ───────────────────────────────────────────────── */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id      = link.getAttribute('href').replace('#', '');
      var section = document.getElementById(id);
      if (!section) return;

      e.preventDefault();
      scrollingToTarget = true;
      scrollToSection(document.getElementById(id));

      // Update active state immediately on click
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      // Keep the URL hash in sync without triggering a native scroll
      history.pushState(null, '', '#' + id);
    });
  });
})();
