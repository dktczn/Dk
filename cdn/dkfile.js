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
