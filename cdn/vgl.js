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
