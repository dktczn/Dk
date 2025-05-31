(function() {
    const oldKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
    const newKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    function replaceAPIKeys() {
        document.querySelectorAll('a[href]').forEach(element => {
            let rawHref = element.getAttribute('href');
            if (rawHref && rawHref.includes(oldKey)) {
                element.setAttribute('href', rawHref.replaceAll(oldKey, newKey));
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            // Check if the site starts with https://bolly4u.id/
            if (window.location.href.startsWith("https://bolly4u.id/")) {
                replaceAPIKeys();
            }
        }, 2000); // 2 सेकंड बाद
    });
})();
