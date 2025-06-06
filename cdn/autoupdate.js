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

// === CONFIGURATION ===
const newApiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c"; // <-- Yahan apni nayi API key daalein
const targetDomain = "dashboard.smallshorts.com"; // Jis domain ke link update karne hain

// === FUNCTION ===
document.querySelectorAll('a[href*="api="]').forEach(link => {
    try {
        const url = new URL(link.href);
        if (url.hostname.includes(targetDomain) && url.searchParams.has("api")) {
            url.searchParams.set("api", newApiKey);
            link.href = url.toString();
        }
    } catch (e) {
        // Agar link valid URL nahi hai toh skip kar de
    }
});
