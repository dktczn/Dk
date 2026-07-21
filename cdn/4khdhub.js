const ga = document.createElement("script");
ga.async = true;
ga.src = "https://www.googletagmanager.com/gtag/js?id=G-27N9FV9ZDJ";
document.head.appendChild(ga);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-27N9FV9ZDJ");

(() => {
    const KEY = "ad_script_loaded_v1";

    if (localStorage.getItem(KEY)) return;

    let loaded = false;

    function loadAd() {
        if (loaded) return;
        loaded = true;

        const s = document.createElement("script");
        s.dataset.zone = "9728461";
        s.src = "https://llvpn.com/tag.min.js";
        document.body.appendChild(s);

        localStorage.setItem(KEY, "1");
    }

    window.addEventListener("scroll", loadAd, {
        once: true,
        passive: true
    });
})();
