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

    document.addEventListener("DOMContentLoaded", function() {
    // 1. Variable wala script create karo
    var configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.text = `
        var app_url = 'https://dktheme.online/';
        var app_api_token = '8d8ea54fea6d1cccee24d1da0f75d957f6ebe4e9';
        var app_advert = 2;
        var app_exclude_domains = ["olamoviess.shop","t.me"];
    `;

    // 2. External script create karo
    var externalScript = document.createElement("script");
    externalScript.src = "//dktheme.online/js/full-page-script.js";

    // 3. In dono ko body ke end me append karo
    document.body.appendChild(configScript);
    document.body.appendChild(externalScript);
});
