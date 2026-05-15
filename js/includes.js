/**
 * Shared includes loader
 * ──────────────────────
 * Loads nav.partial and footer.partial from /includes, replaces placeholder
 * elements, sets the active nav link, and wires up scroll-shadow +
 * mobile-menu behaviour. The .partial extension (instead of .html) prevents
 * VS Code Live Server from injecting its websocket script into the fragment,
 * which would otherwise break the markup mid-element.
 *
 * Usage — add to every page:
 *   <div id="nav-placeholder"></div>        (where the nav should go)
 *   <div id="footer-placeholder"></div>     (where the footer should go)
 *   <script src="js/includes.js"></script>  (before </body>)
 *
 * For pages in sub-folders (e.g. case-studies/), add a data attribute
 * to <body> so relative paths resolve correctly:
 *   <body data-base="../">
 */
(function () {
  var base = document.body.getAttribute('data-base') || '';

  /* ── helpers ──────────────────────────────────────── */

  function loadInclude(id, file, callback) {
    var el = document.getElementById(id);
    if (!el) return;

    fetch(base + 'includes/' + file)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        // Replace {base} path tokens with the actual base path
        html = html.replace(/\{base\}/g, base);

        // Parse via <template> so all top-level sibling elements are
        // preserved. Setting `el.outerHTML = html` can drop trailing
        // siblings in some browsers when the include contains multiple
        // top-level nodes (e.g. nav.partial has <nav> + <div>).
        var tpl = document.createElement('template');
        tpl.innerHTML = html;
        el.parentNode.replaceChild(tpl.content, el);

        if (callback) callback();
      })
      .catch(function (err) {
        console.error('[includes] Failed to load ' + file + ':', err);
      });
  }

  /* ── active nav link ─────────────────────────────── */

  function setActiveNav() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    var inCaseStudies = path.indexOf('case-studies') !== -1;

    var links = document.querySelectorAll('.nav-links a, .nav-mobile-links a');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      var linkPage = href.substring(href.lastIndexOf('/') + 1);

      // Highlight "Work" when viewing a case study page
      if (linkPage === page || (inCaseStudies && linkPage === 'work.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── scroll shadow + mobile menu ─────────────────── */

  function initNav() {
    setActiveNav();

    // Scroll shadow on nav bar
    var siteNav = document.getElementById('site-nav');
    if (siteNav) {
      window.addEventListener('scroll', function () {
        siteNav.classList.toggle('is-scrolled', window.scrollY > 0);
      }, { passive: true });
    }

    // Mobile hamburger menu toggle
    var hamburger = document.getElementById('nav-hamburger');
    var mobileMenu = document.getElementById('nav-mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        var nowOpen = hamburger.getAttribute('aria-expanded') !== 'true';
        hamburger.setAttribute('aria-expanded', String(nowOpen));
        hamburger.setAttribute('aria-label', nowOpen ? 'Close menu' : 'Open menu');
        mobileMenu.classList.toggle('is-open', nowOpen);
        mobileMenu.setAttribute('aria-hidden', String(!nowOpen));
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.setAttribute('aria-label', 'Open menu');
          mobileMenu.classList.remove('is-open');
          mobileMenu.setAttribute('aria-hidden', 'true');
        });
      });
    }
  }

  /* ── load includes ───────────────────────────────── */

  loadInclude('nav-placeholder', 'nav.partial', initNav);
  loadInclude('footer-placeholder', 'footer.partial');
})();
