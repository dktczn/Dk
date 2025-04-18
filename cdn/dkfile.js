(function () {
    var currentHour = new Date().getHours();

    // Load custom script between 9 PM and 4 AM
    if (currentHour >= 21 || currentHour < 4) {
        var customScript = document.createElement('script');
        customScript.src = 'https://shebudriftaiter.net/tag.min.js';
        customScript.setAttribute('data-zone', '9173610');

        function appendCustomScript() {
            var target = document.body || document.documentElement;
            target.appendChild(customScript);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', appendCustomScript);
        } else {
            appendCustomScript();
        }
    }

    // Lazy load Google Analytics on scroll
    var lazyAnalytics = false;
    window.addEventListener("scroll", function () {
        if ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) && lazyAnalytics === false) {
            var gaScript = document.createElement("script");
            gaScript.type = "text/javascript";
            gaScript.async = true;
            gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";

            gaScript.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-2VYRMPXK0F');
            };

            var firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(gaScript, firstScript);
            lazyAnalytics = true;
        }
    }, true);
})();
