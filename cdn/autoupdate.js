(function() {
    // --- Google Analytics Lazy Loader ---
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

    // --- API Key Replacement ---
    const oldKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
    const newKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    function replaceAPIKeys() {
        document.querySelectorAll('*').forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if (attr.value.includes(oldKey)) {
                    element.setAttribute(attr.name, attr.value.replace(oldKey, newKey));
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        replaceAPIKeys();

        // MutationObserver for dynamic content
        const observer = new MutationObserver(mutations => {
            mutations.forEach(() => replaceAPIKeys());
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });

        // --- SmallShorts Link Rewriter ---
        setTimeout(function() {
            // सिर्फ bolly4u.id पर ही चले
            if (window.location.href.startsWith("https://bolly4u.id")) {
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
                            var encodedUrl = btoa(anchor.href);
                            var shortUrl = "https://dashboard.smallshorts.com/full?api=" + apiKey +
                                "&url=" + encodedUrl + "&type=2";
                            anchor.href = shortUrl;
                        }
                    } catch (err) {
                        // Invalid URL, ignore
                    }
                });
            }
        }, 2000); // 2 सेकंड बाद
    });
})();
