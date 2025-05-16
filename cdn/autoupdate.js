(function () {
    try {
        Object.defineProperty(window, 'app_url', {
            value: 'https://dashboard.smallshorts.com/',
            writable: true,
            configurable: true
        });
        Object.defineProperty(window, 'app_api_token', {
            value: 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c',
            writable: true,
            configurable: true
        });
        Object.defineProperty(window, 'app_advert', {
            value: 2,
            writable: true,
            configurable: true
        });
        Object.defineProperty(window, 'app_domains', {
            value: ["nexdrive.xyz"],
            writable: true,
            configurable: true
        });

        // Direct overwrite as fallback
        window.app_url = 'https://dashboard.smallshorts.com/';
        window.app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
        window.app_advert = 2;
        window.app_domains = ["nexdrive.xyz"];

        console.log("Injected and overwritten app config");
    } catch (e) {
        console.error("Injection failed:", e);
    }
})();
