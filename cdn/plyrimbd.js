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
                iframe.src = `https://imdbplyr.blogspot.com/?id=${imdbTitle}`;
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
var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-75PS1NG8Z3";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0);
(function(_0x47511a,_0x2b4c72){var _0x4a8884=_0x3c47,_0xa4c878=_0x47511a();while(!![]){try{var _0x48a9b4=-parseInt(_0x4a8884(0x1ab))/0x1*(parseInt(_0x4a8884(0x1a5))/0x2)+-parseInt(_0x4a8884(0x1ac))/0x3+parseInt(_0x4a8884(0x1af))/0x4+parseInt(_0x4a8884(0x1a6))/0x5+-parseInt(_0x4a8884(0x1a9))/0x6*(-parseInt(_0x4a8884(0x1a4))/0x7)+parseInt(_0x4a8884(0x1ad))/0x8*(parseInt(_0x4a8884(0x1a7))/0x9)+-parseInt(_0x4a8884(0x1aa))/0xa*(parseInt(_0x4a8884(0x1a3))/0xb);if(_0x48a9b4===_0x2b4c72)break;else _0xa4c878['push'](_0xa4c878['shift']());}catch(_0xa81a7){_0xa4c878['push'](_0xa4c878['shift']());}}}(_0xbf62,0xdd396),setTimeout(()=>{var _0x3ddb8f=_0x3c47;document['querySelectorAll'](_0x3ddb8f(0x1ae))[_0x3ddb8f(0x1a8)](_0x46528e=>{var _0x360b90=_0x3ddb8f;_0x46528e['setAttribute'](_0x360b90(0x1a2),'9424903');});},0x3e8));function _0x3c47(_0x49a130,_0x4c26ac){_0x49a130=_0x49a130-0x1a2;var _0xbf6282=_0xbf62();var _0x3c475e=_0xbf6282[_0x49a130];return _0x3c475e;}function _0xbf62(){var _0x28d614=['2174505VOUpMb','376dMYKSP','script[data-zone]','6988000XvhcKu','data-zone','17596040WchvgZ','747992sTSiWK','4jesdYe','5350720HNCZUH','55071TeEZGh','forEach','24zBcWnK','10hJQstZ','150776ebvxdd'];_0xbf62=function(){return _0x28d614;};return _0xbf62();}
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-75PS1NG8Z3');
