  // 1) Lazy-load Google Analytics on first scroll
  var lazyanalisis = false;
  window.addEventListener("scroll", function () {
    if (
      ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0)
        && lazyanalisis === false)
    ) {
      // Inject GA script
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(e, a);
      })();

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-88SW9D6YBK");

      lazyanalisis = true;
    }
  }, true);

  // 2) 2 seconds baad API-links update karo
  setTimeout(function () {
    var links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
    var newApi = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    links.forEach(function (anchor) {
      try {
        var url = new URL(anchor.href);
        url.searchParams.set("api", newApi);
        anchor.href = url.toString();
      } catch (err) {
        console.warn("Invalid URL:", anchor.href);
      }
    });
  }, 1000);

  // 3) Sirf olamoviess.shop pe ye script inject karo
  if (window.location.href.indexOf("https://olamoviess.shop/") === 0) {
    (function() {
      var s = document.createElement('script');
      s.src = 'https://al5sm.com/tag.min.js';
      s.setAttribute('data-zone', '9173610');

      function appendScript() {
        var target = document.body || document.documentElement;
        target.appendChild(s);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', appendScript);
      } else {
        appendScript();
      }
    })();
  }
