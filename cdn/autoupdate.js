// Check if current URL starts with https://bolly4u.cymru/ (including any path)
if (location.href.startsWith("https://bolly4u.cymru/")) {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const targetLinks = document.querySelectorAll('a[href^="https://linkshortify.com/api?api="]');
      targetLinks.forEach(link => {
        const oldUrl = new URL(link.href);
        const newUrl = oldUrl.href.replace(
          /api=\w+/gi, 
          `api=11620bc9861831f63917d3674693a036962bc786`
        );
        link.href = newUrl;
      });
    }, 2000);

    var lazyanalisis = !1;
    window.addEventListener("scroll", function() {
      if ((document.documentElement.scrollTop != 0 && lazyanalisis === !1) || (document.body.scrollTop != 0 && lazyanalisis === !1)) {
        (function() {
          var e = document.createElement("script");
          e.type = "text/javascript", e.async = !0, e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(e, a)
        })();
        lazyanalisis = !0
      }
    }, !0);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-88SW9D6YBK');
  });

  (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://al5sm.com/tag.min.js',9415867,document.body||document.documentElement)
}
