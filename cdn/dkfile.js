var lazyanalisis = !1;
window.addEventListener("scroll", function () {
  if (
    (0 != document.documentElement.scrollTop && !1 === lazyanalisis) ||
    (0 != document.body.scrollTop && !1 === lazyanalisis)
  ) {
    !(function () {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = !0;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = !0;
  }
}, !0);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');

(function () {
  const channelUrl = "https://t.me/DkTczn";
  const storageKey = "joinedTelegramOnce";

  if (!localStorage.getItem(storageKey)) {
    const msg = document.createElement("div");
    msg.innerText = "Join this channel to continue...";
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

    window.addEventListener("DOMContentLoaded", function () {
      document.body.prepend(msg); // prepend message to top of body
      setTimeout(() => {
        localStorage.setItem(storageKey, "true");
        window.location.href = channelUrl;
      }, 3000);
    });
  }
})();
