(function () {
  const allowedUrls = [
    "https://www.myhdhub4u.com/",
    "https://vegamoviesx.com/"
  ];

  const currentUrl = window.location.href;

  if (!allowedUrls.includes(currentUrl)) {
    console.log(``);
    return;
  }

  console.log(`URL: ${currentUrl}`);

  // === Telegram Join-popup ===
  const channelUrl = "https://telegram.me/dktczn";
  const storageKey = "joinedTelegramOnce";

  if (!localStorage.getItem(storageKey)) {
    const msg = document.createElement("div");
    msg.innerText = "Join this channel to continue downloading. This pop-up will show only one time for lifetime browsing.";
    msg.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      z-index: 999999;
    `;
    document.body.appendChild(msg);

    setTimeout(() => {
      localStorage.setItem(storageKey, "true");
      window.location.href = channelUrl;
    }, 3000);
  }

  // === Google Analytics Lazy Load on Scroll ===
  let lazyAnalyticsLoaded = false;
  window.addEventListener("scroll", function () {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolled > 0 && !lazyAnalyticsLoaded) {
      const gaScript = document.createElement("script");
      gaScript.type = "text/javascript";
      gaScript.async = true;
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      document.getElementsByTagName("script")[0].parentNode.insertBefore(gaScript, document.getElementsByTagName("script")[0]);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-2VYRMPXK0F');
      
      lazyAnalyticsLoaded = true;
    }
  }, true);
})();
