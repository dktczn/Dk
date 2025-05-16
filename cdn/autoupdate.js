var lazyanalisis = !1;

  window.addEventListener("scroll", function () {
    if (
      (document.documentElement.scrollTop !== 0 && lazyanalisis === !1) ||
      (document.body.scrollTop !== 0 && lazyanalisis === !1)
    ) {
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(e, a);
      })();

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-88SW9D6YBK");

      lazyanalisis = !0;
    }
  }, !0);

  setTimeout(function () {
    const links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
    const newApi = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    links.forEach(function (anchor) {
      const url = new URL(anchor.href);
      url.searchParams.set("api", newApi);
      anchor.href = url.toString();
    });
  }, 2000);
