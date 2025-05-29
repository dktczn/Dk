document.addEventListener('DOMContentLoaded', () => {
  // 1. Create hidden container with invisible links
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

  // 2. Add hidden CSS for .btc
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
      bottom: 0;
      left: 0;
      color: transparent;
      background: transparent;
    }
  `;
  document.head.appendChild(style);

  // 3. Shortener logic: only run between 8 AM and 12 PM
  const currentHour = new Date().getHours();
  if (currentHour >= 18 && currentHour < 2) {
    const apiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    const allowedDomains = [
      "nexdrive.lol",
      "nexdrive.xyz",
      "new1.filesdl.in",
      "nexdrive.fun"
    ];

    const links = document.querySelectorAll("a[href^='http']");
    links.forEach(anchor => {
      try {
        const urlObj = new URL(anchor.href);
        if (allowedDomains.includes(urlObj.hostname)) {
          const encodedUrl = btoa(anchor.href);
          const shortUrl = `https://dashboard.smallshorts.com/full?api=${apiKey}&url=${encodedUrl}&type=2`;
          anchor.href = shortUrl;
        }
      } catch (err) {
      
      }
    });
  }
});

// 4. Lazy load Google Analytics on scroll
let lazyanalisis = false;
window.addEventListener("scroll", () => {
  if (
    (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) &&
    lazyanalisis === false
  ) {
    const ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-88SW9D6YBK");

    lazyanalisis = true;
  }
}, true);
