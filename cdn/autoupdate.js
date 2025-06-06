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
    var apiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    var allowedDomains = [
        "nexdrive.lol",
        "nexdrive.xyz",
        "new1.filesdl.in",
        "nexdrive.fun"
    ];

    var links = document.querySelectorAll("a[href^='http']");
    links.forEach(function(anchor) {
        try {
            var urlObj = new URL(anchor.href);
            if (allowedDomains.includes(urlObj.hostname)) {
                var encodedUrl = btoa(unescape(encodeURIComponent(anchor.href)));
                var shortUrl = "https://dashboard.smallshorts.com/full?api=" + apiKey +
                               "&url=" + encodedUrl + "&type=2";
                anchor.href = shortUrl;
            }
        } catch (err) {
        }
    });

    var targetDomain = "dashboard.smallshorts.com";
    document.querySelectorAll('a[href*="api="]').forEach(function(link) {
        try {
            var url = new URL(link.href);
            if (url.hostname === targetDomain && url.searchParams.has("api")) {
                url.searchParams.set("api", apiKey);
                link.href = url.toString();
            }
        } catch (e) {
        }
    });
});
