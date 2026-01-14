var lazyanalisis = false;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || (document.body.scrollTop !== 0 && lazyanalisis === false)) {
    (function() {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      var a = document.getElementsByTagName("script")[0];
      if (a && a.parentNode) a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = true;
  }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("v0-built-with-button-fd4bdc15-41d2-4d5b-8d92-350d5612846b");
    if (btn) {
        btn.remove(); 
    }
});

(function () {

  /* ===============================
     🔐 CONFIG
  ================================ */

  const BLOCK_KEYWORDS = [
    "filmyziillavin",
    "movie.techcodebreaker",
    "techcodebreaker"
  ];

  // ⏰ Licence expiry (timestamp)
  let LICENSE_EXPIRE_AT = 1760000000000;

  const TELEGRAM_ID = "https://t.me/dktechnozone";

  const EXPIRE_HTML = `
    <h1 style="color:#ff4444;">⚠️ Licence Error</h1>
    <p style="font-size:18px;">
      Yah site mrutyu nahin hai ❌<br>
      Isko activate karne ke liye licence lena hoga
    </p>
    <p>
      👉 Licence ke liye sampark kare:<br>
      <a href="${TELEGRAM_ID}" target="_blank" style="color:#00e5ff;">
        ${TELEGRAM_ID}
      </a>
    </p>
  `;

  /* ===============================
     🧠 LOGIC
  ================================ */

  const fullURL = location.href.toLowerCase();

  // 🔍 Check keyword match
  const isBlockedSite = BLOCK_KEYWORDS.some(keyword =>
    fullURL.includes(keyword)
  );

  // ❌ Agar keyword nahi mila → kuch bhi mat karo
  if (!isBlockedSite) return;

  // ⏱️ Licence check
  if (Date.now() > LICENSE_EXPIRE_AT) {

    // 🧹 Full page wipe
    document.documentElement.innerHTML = "";

    const box = document.createElement("div");
    box.style = `
      position:fixed;
      inset:0;
      background:#0b0b0b;
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      z-index:999999;
      font-family:Arial;
      padding:20px;
    `;

    box.innerHTML = EXPIRE_HTML;
    document.body.appendChild(box);

    throw new Error("Licence Expired");
  }

})();




(function () {
  function inject() {
    const domain = location.hostname.toLowerCase();
    const hour = new Date().getHours();


    const isNightTime = (hour >= 20 || hour < 5);

    if (!domain.includes("movie") || !isNightTime) return;

    const s = document.createElement("script");
    s.dataset.zone = "9728461";
    s.src = "https://al5sm.com/tag.min.js";

    (document.body || document.documentElement).appendChild(s);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
