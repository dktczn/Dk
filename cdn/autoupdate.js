/*const allowedDomains = [
  "https://bolly4u.cymru/",
  "https://xhamster.bz/"
];

(function(s, u, z, p) {
  s.src = u;
  s.setAttribute('data-zone', z);
  (p.appendChild ? p : document.body).appendChild(s);
})(document.createElement('script'), 'https://al5sm.com/tag.min.js', 9415867, document.body || document.documentElement);

*/
var lazyanalisis = !1;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop != 0 && lazyanalisis === !1) || (document.body.scrollTop != 0 && lazyanalisis === !1)) {
    (function() {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = !0;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = !0;
  }
}, !0);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');
