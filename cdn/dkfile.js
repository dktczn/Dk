document.addEventListener("DOMContentLoaded", () => {
  let analyticsLoaded = false;

  window.addEventListener("scroll", function () {
    if (!analyticsLoaded && (document.documentElement.scrollTop || document.body.scrollTop)) {
      let script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-2VYRMPXK0F");
        console.log("Google Analytics Loaded");
      };

      analyticsLoaded = true;
    }
  }, { passive: true });
});
