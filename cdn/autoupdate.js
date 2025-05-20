setTimeout(function () {
    
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


   /* var links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
    var newApi = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    links.forEach(function (anchor) {
      try {
        var url = new URL(anchor.href);
        url.searchParams.set("api", newApi);
        anchor.href = url.toString();
      } catch (err) {
        console.warn("Invalid URL:", anchor.href);
      }
    });*/

    var allowedDomains = ['olamoviess.shop', 'xhamster.bz'];
    if (allowedDomains.includes(location.hostname)) {
      var s1 = document.createElement("script");
      s1.type = "text/javascript";
      s1.text = `
        var app_url = 'https://dktheme.online/';
        var app_api_token = '8d8ea54fea6d1cccee24d1da0f75d957f6ebe4e9';
        var app_advert = 2;
        var app_exclude_domains = ["olamoviess.shop","t.me"];
      `;
      document.head.appendChild(s1);

      var s2 = document.createElement("script");
      s2.src = "//dktheme.online/js/full-page-script.js";
      document.head.appendChild(s2);
    }

  }, 2000);
