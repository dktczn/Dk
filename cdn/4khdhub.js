  var app_url = 'https://dashboard.smallshorts.com/';
  var app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
  var app_advert = 2;
  var app_domains = ["/"]; // agar kuch aur domains bypass karne hai to add kar lo (case-insensitive)
  // ------------------------------------------------------------

  (function () {
    // helpers
    function isSkippableHref(href) {
      if (!href) return true;
      href = href.trim();

      // skip anchors, javascript:, mailto:, tel:, hash-only
      if (href.indexOf('javascript:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return true;
      if (href === '#' || href.indexOf('#') === 0) return true;

      // relative paths (starting with '/') -> consider as same site -> skip
      if (href.indexOf('/') === 0) return true;

      // protocol-relative //example.com
      if (href.indexOf('//') === 0) {
        // make absolute by adding current protocol
        href = window.location.protocol + href;
      }

      // try parse URL
      try {
        var u = new URL(href, window.location.href);
        // same origin => skip
        if (u.origin === window.location.origin) return true;

        // skip if host matches any app_domains (case-insensitive)
        var hostLower = u.host.toLowerCase();
        for (var i = 0; i < app_domains.length; i++) {
          if (!app_domains[i]) continue;
          if (hostLower.indexOf(app_domains[i].toLowerCase()) !== -1) return true;
        }
      } catch (e) {
        // if URL parsing fails, be conservative and skip
        return true;
      }

      return false; // not skippable => eligible to short
    }

    // Build the short/redirect URL format used by your shortener.
    // **Adjust this to match your shortener's expected route if needed.**
    function buildShort(originalUrl) {
      // Example: https://dashboard.smallshorts.com/redirect?u=<encoded>&token=<token>&ad=2
      var p = app_url;
      if (p.slice(-1) !== '/') p += '/';
      return p + 'redirect?u=' + encodeURIComponent(originalUrl) + '&token=' + encodeURIComponent(app_api_token) + (typeof app_advert !== 'undefined' ? '&ad=' + encodeURIComponent(app_advert) : '');
    }

    // Process one anchor element
    function processAnchor(a) {
      try {
        if (!a || !a.href) return;
        if (a.dataset._shortProcessed) return; // idempotent
        if (isSkippableHref(a.getAttribute('href'))) {
          a.dataset._shortProcessed = 'skipped';
          return;
        }

        // Save original in data attribute (optional)
        a.dataset.originalHref = a.href;

        // Replace href
        a.href = buildShort(a.href);

        // Optionally set rel and target to open in new tab for external redirects
        a.setAttribute('rel', 'noopener noreferrer');
        if (!a.hasAttribute('target')) a.setAttribute('target', '_blank');

        a.dataset._shortProcessed = 'done';
      } catch (err) {
        // fail silently
        console.error('shorter: error processing anchor', err);
      }
    }

    // Process all anchors inside #main
    function processAll() {
      var main = document.getElementById('main');
      if (!main) return;
      var anchors = main.querySelectorAll('a[href]');
      anchors.forEach(function (a) {
        processAnchor(a);
      });
    }

    // Observe mutations inside #main to catch dynamic links
    function observeMain() {
      var main = document.getElementById('main');
      if (!main) return;
      var mo = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.type === 'childList') {
            // new nodes
            m.addedNodes.forEach(function (node) {
              if (node.nodeType !== 1) return;
              if (node.matches && node.matches('a[href]')) processAnchor(node);
              // anchors inside new subtree
              var as = node.querySelectorAll ? node.querySelectorAll('a[href]') : [];
              as.forEach(function (a) { processAnchor(a); });
            });
          } else if (m.type === 'attributes' && m.target && m.target.matches && m.target.matches('a[href]')) {
            processAnchor(m.target);
          }
        });
      });

      mo.observe(main, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
    }

    // Run on DOMContentLoaded and also after load for safety
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        processAll();
        observeMain();
      });
    } else {
      processAll();
      observeMain();
    }

    // Also, allow manual trigger from other scripts if needed
    window.__shorter_processAll = processAll;
  })();
