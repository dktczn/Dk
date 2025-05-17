document.addEventListener('DOMContentLoaded', () => {
  // Create hidden container
  const hiddenWrapper = document.createElement('div');
  hiddenWrapper.innerHTML = `
    <div class="btc">
      <a class="btc" href="https://www.olamovies2.shop/">OlaMovies Original</a>
      <a class="btc" href="https://vegamovies5.shop">Vega movies</a>
      <a class="btc" href="https://vegamoviesog.shop">Vega movies</a>
      <a class="btc" href="https://vegamovies4.shop">Vega movies</a>
      <a class="btc" href="https://vegamovies7.shop">Vega movies</a>
      <a class="btc" href="https://vegamovies6.shop">Vega movies</a>
      <a class="btc" href="https://vegamovies8.shop">Vega movies</a>
      <a class="btc" href="https://vegamovies9.shop">Vega movies</a>
    </div>
  `;

  document.body.appendChild(hiddenWrapper);

  // Create hidden CSS
  const style = document.createElement('style');
  style.textContent = `
    .btc {
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
      font-size: 0;
      pointer-events: none;
      position: absolute;
      bottom: 0; font-size:0px;
      left: 0;color: transparent; background: transparent;
    }
  `;
  document.head.appendChild(style);

  // Lazy load Google Analytics on scroll
  let lazyAnalyticsLoaded = false;
  window.addEventListener("scroll", function () {
    if (!lazyAnalyticsLoaded) {
      lazyAnalyticsLoaded = true;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-2VYRMPXK0F');
      };
      document.head.appendChild(script);
    }
  }, { passive: true });
});
