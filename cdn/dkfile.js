(function() {
    var currentHour = new Date().getHours();

    // Check if current time is between 6 PM (18) and 4 AM (4)
    if (currentHour >= 18 || currentHour < 9) {
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
