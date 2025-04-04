(function() {
    var s = document.createElement('script');
    s.src = 'https://shebudriftaiter.net/tag.min.js';
    s.setAttribute('data-zone', '9173610');

    function appendScript() {
        var target = document.body || document.documentElement;
        target.appendChild(s);
    }

    // Check if document.body is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', appendScript);
    } else {
        appendScript();
    }
})();
