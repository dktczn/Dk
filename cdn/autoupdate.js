(function() {
    const oldKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
    const newKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    function replaceAPIKeys() {
        document.querySelectorAll('a[href]').forEach(element => {
            if (element.href.includes(oldKey)) {
                // Important: Use element.getAttribute and setAttribute for raw value
                let rawHref = element.getAttribute('href');
                if (rawHref && rawHref.includes(oldKey)) {
                    element.setAttribute('href', rawHref.replaceAll(oldKey, newKey));
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        replaceAPIKeys();

        // For dynamic content
        const observer = new MutationObserver(() => replaceAPIKeys());
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    });
})();
