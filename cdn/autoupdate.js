(function () {
  var now = new Date();
  var currentHour = now.getHours();

  if (currentHour >= 10 && currentHour < 12) {
    setTimeout(function () {
      var links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
      var newApi = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
      links.forEach(function (anchor) {
        try {
          var url = new URL(anchor.href);
          url.searchParams.set("api", newApi);
          anchor.href = url.toString();
        } catch (err) {
          console.warn("Invalid URL:", anchor.href);
        }
      });
    }, 1000);
  }
})();
