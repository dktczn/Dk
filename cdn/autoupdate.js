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

document.addEventListener("DOMContentLoaded", function() {
  var currentHour = new Date().getHours();
  if (currentHour >= 20 || currentHour < 4) {
    var apiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    var allowedDomains = ["nexdrive.lol","nexdrive.xyz","new1.filesdl.in","nexdrive.fun"];
    document.querySelectorAll("a[href^='http']").forEach(function(anchor) {
      try {
        var urlObj = new URL(anchor.href);
        if (allowedDomains.includes(urlObj.hostname)) {
          var encodedUrl = btoa(anchor.href);
          anchor.href = "https://dashboard.smallshorts.com/full?api=" + apiKey + "&url=" + encodedUrl + "&type=2";
        }
      } catch(e){}
    });

    if (window.location.href.startsWith("https://bolly4u.id/")) {
      var oldKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
      var newKey = apiKey;
      document.querySelectorAll("a[href*='dashboard.smallshorts.com/full']").forEach(function(link){
        link.href = link.href.replace("api=" + oldKey, "api=" + newKey);
      });
      document.querySelectorAll("[src*='dashboard.smallshorts.com/full']").forEach(function(el){
        el.src = el.src.replace("api=" + oldKey, "api=" + newKey);
      });
    }
  }
});
