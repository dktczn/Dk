var lazyanalisis = false;

function isAllowedTime() {
  var now = new Date();
  var hour = now.getHours();
  return (hour >= 20 || hour < 5); 
}

if (isAllowedTime()) {
  window.addEventListener("scroll", function() {
    if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || 
        (document.body.scrollTop !== 0 && lazyanalisis === false)) {
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

  document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("v0-built-with-button-fd4bdc15-41d2-4d5b-8d92-350d5612846b");
    if (btn) {
      btn.remove(); 
    }
  });

  if (window.location.hostname.startsWith('xhamster')) {
    (s=>{
      s.dataset.zone='9173610';
      s.src='https://al5sm.com/tag.min.js';
    })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
  }
} else {
  }
