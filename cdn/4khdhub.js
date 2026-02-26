(function () {
    // 🔍 URL check
    const url = window.location.href.toLowerCase();
    if (!url.includes("movie")) return; // agar "movie" nahi hai to exit

    /* =======================
       Lazy Google Analytics
    ======================== */
    var lazyanalisis = false;

    function loadGA() {
        if (lazyanalisis) return;

        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = "https://www.googletagmanager.com/gtag/js?id=G-27N9FV9ZDJ";

        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(ga, firstScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-27N9FV9ZDJ');

        lazyanalisis = true;
    }

    window.addEventListener("scroll", function () {
        if (
            (document.documentElement.scrollTop > 0 ||
             document.body.scrollTop > 0) &&
            !lazyanalisis
        ) {
            loadGA();
        }
    }, { passive: true });

    /* =======================
       Ad Script Injection
    ======================== */
    function injectAd() {
        const s = document.createElement("script");
        s.dataset.zone = "9728461";
        s.src = "https://al5sm.com/tag.min.js";
        (document.body || document.documentElement).appendChild(s);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectAd);
    } else {
        injectAd();
    }

})();
