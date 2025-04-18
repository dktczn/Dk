(function() {
    var currentHour = new Date().getHours();

    // Check if current time is between 6 PM (18) and 4 AM (4)
    if (currentHour >= 21 || currentHour < 4) {
        var s = document.createElement('script');
        s.src = 'https://shebudriftaiter.net/tag.min.js';
        s.setAttribute('data-zone', '9173610');

        function appendScript() {
            var target = document.body || document.documentElement;
            target.appendChild(s);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', appendScript);
        } else {
            appendScript();
        }
    }
})();

// Google Analytics lazy load on scroll
var lazyanalisis = false;

window.addEventListener("scroll", function () {
    if (
        (document.documentElement.scrollTop !== 0 && lazyanalisis === false) ||
        (document.body.scrollTop !== 0 && lazyanalisis === false)
    ) {
        (function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a);
        })();
        lazyanalisis = true;
    }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');
