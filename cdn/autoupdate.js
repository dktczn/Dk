/*(function(s, u, z, p) {
  s.src = u;
  s.setAttribute('data-zone', z);
  (p && p.appendChild ? p : document.body).appendChild(s);
})(document.createElement('script'), 'https://al5sm.com/tag.min.js', 9479383, document.body || document.documentElement);
*/
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
