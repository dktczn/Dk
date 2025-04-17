(function() {
    var currentHour = new Date().getHours();

    // Check if current time is between 6 PM (18) and 4 AM (4)
    if (currentHour >= 13 || currentHour < 11) {
        var s = document.createElement('script');
        s.src = 'https://kulroakonsu.net/88/tag.min.js';
        s.setAttribute('data-zone', '142759');

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
