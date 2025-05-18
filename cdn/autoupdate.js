setTimeout(function () {
    // 1) Load Google Analytics after scroll (lazy load)
    var lazyanalisis = false;
    window.addEventListener("scroll", function () {
      if (
        (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) &&
        lazyanalisis === false
      ) {
        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
        document.head.appendChild(ga);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-88SW9D6YBK");

        lazyanalisis = true;
      }
    }, true);

    // 2) Replace all matching shortener links
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

    // 3) Load additional script on specific domains
    var allowedDomains = ['olamoviess.shop', 'xhamster.bz'];
    if (allowedDomains.includes(location.hostname)) {
      var s1 = document.createElement("script");
      s1.type = "text/javascript";
      s1.text = `
        var app_url = 'https://dashboard.smallshorts.com/';
        var app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
        var app_advert = 2;
        var app_domains = ["nexdrive.xyz","nexdrive.lol"];
      `;
      document.head.appendChild(s1);

      var s2 = document.createElement("script");
      s2.src = "https://dashboard.smallshorts.com/js/full-page-script.js";
      document.head.appendChild(s2);
    }

  }, 2000);
