(function() {
  // Function to check allowed time (8 PM to 5 AM)
  function isAllowedTime() {
    var now = new Date();
    var hour = now.getHours();
    return (hour >= 20 || hour < 5); // 20 = 8 PM, 5 = 5 AM
  }

  if (isAllowedTime()) {
    // Load the scripts only in allowed time
    var config = document.createElement('script');
    config.type = 'text/javascript';
    config.innerHTML = `
      var app_url = 'https://dashboard.smallshorts.com/';
      var app_api_token = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';
      var app_advert = 2;
      var app_domains = ["nexdrive.top","mediafire.com","nexdrive.top","hubdrive.space","drive.google.com"];
    `;
    document.head.appendChild(config);

    var s = document.createElement('script');
    s.src = '//dashboard.smallshorts.com/js/full-page-script.js';
    s.async = true;
    document.body.appendChild(s);
  }
})();
