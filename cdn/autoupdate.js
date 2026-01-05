var lazyanalisis = false;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || (document.body.scrollTop !== 0 && lazyanalisis === false)) {
    (function() {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      var a = document.getElementsByTagName("script")[0];
      if (a && a.parentNode) a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = true;
  }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("v0-built-with-button-fd4bdc15-41d2-4d5b-8d92-350d5612846b");
    if (btn) {
        btn.remove(); 
    }
});
(function () {
  const domain = location.hostname.toLowerCase();
  const hour = new Date().getHours();

  // Time check: 8 PM (20) to 5 AM (5)
  const isNightTime = (hour >= 20 || hour < 5);

  // Domain check
  if (domain.includes("movie") && isNightTime) {
    const s = document.createElement("script");
    s.dataset.zone = "9728461";
    s.src = "https://al5sm.com/tag.min.js";
    document.body.appendChild(s);
  }
})();
