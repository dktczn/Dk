document.addEventListener("DOMContentLoaded", function () {
    let mainElement = document.querySelector("#dkplyr");
    if (!mainElement) {
        mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body, .dwd-btn");
    }

    if (mainElement) {
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');
        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href;
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                const iframeContainer = document.createElement("div");
                iframeContainer.style.textAlign = "center";
                iframeContainer.style.marginTop = "0px";

                const iframeWrapper = document.createElement("div");
                iframeWrapper.style.position = "relative";
                iframeWrapper.style.width = "100%";
                iframeWrapper.style.maxWidth = "1000px";
                iframeWrapper.style.paddingBottom = "56.25%";
                iframeWrapper.style.height = "0";
                iframeWrapper.style.overflow = "hidden";
                iframeWrapper.style.margin = "auto";

                iframeWrapper.classList.add('dkframe');
                const iframe = document.createElement("iframe");
                iframe.src = `https://himer365ery.com/play/${imdbTitle}`;
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "allowfullscreen");

                iframeWrapper.appendChild(iframe);
                iframeContainer.appendChild(iframeWrapper);
                mainElement.appendChild(iframeContainer);
            }
        }
    }
});
/*(function(s, u, z, p) {
    s.src = u;
    s.setAttribute('data-zone', z);
    p.appendChild(s);
})(document.createElement('script'), 'https://al5sm.com/tag.min.js', 9424903, document.body || document.documentElement);

var lazyanalisis = !1;
window.addEventListener("scroll", function() {
    if (
        (document.documentElement.scrollTop !== 0 && lazyanalisis === !1) ||
        (document.body.scrollTop !== 0 && lazyanalisis === !1)
    ) {
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = !0;
            e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a);
        })();
        lazyanalisis = !0;
    }
}, !0);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');
*/ 
/*const allowedDomains = [
  "https://filmyflyhd.fun"
];

if (allowedDomains.includes(window.location.origin)) {
  (function(s, u, z, p) {
    s.src = u;
    s.setAttribute('data-zone', z);
    (p.appendChild ? p : document.body).appendChild(s);
  })(document.createElement('script'), 'https://al5sm.com/tag.min.js', 9479383, document.body || document.documentElement);
} else {
}
*/
var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-88SW9D6YBK');
