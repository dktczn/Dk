var lazyanalisis = false;
window.addEventListener("scroll", function () {
  if (
    (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) &&
    lazyanalisis === false
  ) {
    (function () {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
      document.head.appendChild(e);
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

// 2) Replace all matching shortener links
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

// 3) Run extra script only on specific domains
var allowedDomains = ['olamoviess.shop', 'xhamster.bz']; // fix domain spelling if needed
if (allowedDomains.includes(location.hostname)) {
  document.addEventListener('DOMContentLoaded', function () {
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.text = `
      var app_url = 'https://dashboard.smallshorts.com/';
      var app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
      var app_advert = 2;
      var app_domains = ["nextdrive.xyz","nextdrive.lol"];
    `;
    document.head.appendChild(s1);

    var s2 = document.createElement("script");
    s2.src = "https://dashboard.smallshorts.com/js/full-page-script.js";
    document.head.appendChild(s2);
  });
}
