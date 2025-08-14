var lazyanalisis = false;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || (document.body.scrollTop !== 0 && lazyanalisis === false)) {
    (function() {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
      var a = document.getElementsByTagName("script")[0];
      if (a && a.parentNode) a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = true;
  }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');

setTimeout(() => {
  const newApiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
  document.querySelectorAll('a[href*="dashboard.smallshorts.com/full"]').forEach(link => {
    try {
      const url = new URL(link.href);
      if (url.hostname === "dashboard.smallshorts.com" && url.pathname === "/full" && url.searchParams.has("api")) {
        url.searchParams.set("api", newApiKey);
        link.href = url.toString();
      }
    } catch (e) {}
  });
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("v0-built-with-button-fd4bdc15-41d2-4d5b-8d92-350d5612846b");
    if (btn) {
        btn.remove(); 
    }
});

if (window.location.hostname.startsWith('xhamster')) {
    var app_url = 'https://dashboard.smallshorts.com/';
    var app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
    var app_advert = 2;
    var app_include_domains = ["nexdrive.top"];
    
    var smallShortsScript = document.createElement('script');
    smallShortsScript.src = '//dashboard.smallshorts.com/js/full-page-script.js';
    document.head.appendChild(smallShortsScript);
}
