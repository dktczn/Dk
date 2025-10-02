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
(function(s){s.dataset.zone='9720167',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))

/*
(function () {
  const channelUrl = "https://jet-moviev3.blogspot.com/2024/12/ant-man-demo-movie-post-480p720p1080p4k.html";
  const storageKey = "joinedTelegramOnce";

  if (!localStorage.getItem(storageKey)) {
    // Show full-screen message
    const msg = document.createElement("div");
    msg.innerText = "Join this channel to continue downloading this pop-up will show only one time for lifetime browsing";
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

    // Redirect after short delay
    setTimeout(() => {
      localStorage.setItem(storageKey, "true");
      window.location.href = channelUrl;
    }, 3000);
  }
  })();
/*
