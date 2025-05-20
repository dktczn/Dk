document.addEventListener("DOMContentLoaded", function() {
    // Shortener API key
    var apiKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
    // Allowed domains only
    var allowedDomains = [
        "nexdrive.lol",
        "nexdrive.xyz",
        "new1.filesdl.in",
        "nexdrive.fun"
    ];

    // Select all <a> tags
    var links = document.querySelectorAll("a[href^='http']");
    links.forEach(function(anchor) {
        try {
            var urlObj = new URL(anchor.href);
            // Agar link allowed domains me hai
            if (allowedDomains.includes(urlObj.hostname)) {
                // Encode original URL in base64
                var encodedUrl = btoa(anchor.href);
                // Construct new short link
                var shortUrl = "https://dashboard.smallshorts.com/full?api=" + apiKey +
                               "&url=" + encodedUrl + "&type=2";
                anchor.href = shortUrl;
            }
        } catch (err) {
            // Agar URL valid nahi hai toh skip
        }
    });
});

