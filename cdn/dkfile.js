(function () {
  const channelUrl = "https://t.me/dktczn";
  const storageKey = "joinedTelegramOnce";

  if (!localStorage.getItem(storageKey)) {
    // Show full-screen message
    const msg = document.createElement("div");
    msg.innerText = "Join this channel to continue browsing...";
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
