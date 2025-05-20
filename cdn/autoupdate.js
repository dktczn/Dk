document.addEventListener("DOMContentLoaded", function() {
    var api = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    var links = document.querySelectorAll('a[href^="http"]:not([href*="olamoviess.shop"]):not([href*="t.me"])');
    links.forEach(function(anchor) {
        try {
            var url = new URL(anchor.href);
            url.searchParams.set("api", api);
            anchor.href = "https://dashboard.smallshorts.com/full?" + url.searchParams.toString();
        } catch (err) {
            console.warn("Invalid URL:", anchor.href);
        }
    });
});
