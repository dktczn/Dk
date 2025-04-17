// Step 1: Dynamically load Adcash Library
(function() {
    var aclibScript = document.createElement('script');
    aclibScript.id = 'aclib';
    aclibScript.type = 'text/javascript';
    aclibScript.src = '//acscdn.com/script/aclib.js';
    aclibScript.onload = function() {
        // Step 2: Run the pop after the lib is loaded
        if (typeof aclib !== 'undefined' && typeof aclib.runPop === 'function') {
            aclib.runPop({
                zoneId: '9832014',
            });
        }
    };
    document.head.appendChild(aclibScript);
})();
