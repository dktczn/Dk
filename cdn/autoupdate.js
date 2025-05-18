(function () {
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
    document.head.appendChild(e);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-88SW9D6YBK");
})();

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
    var newApi = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    links.forEach(function (anchor) {
        try {
            var url = new URL(anchor.href);
            url.searchParams.set("api", newApi);
            anchor.href = url.toString();
        } catch (err) {
    
        }
    });
});
