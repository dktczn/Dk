document.addEventListener("DOMContentLoaded", function () {
  // CSS Inject
  var style = document.createElement("style");
  style.innerHTML = `
    .full-screen-button {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-size: 24px;
      text-align: center;
      line-height: 100vh;
      cursor: pointer;
      z-index: 9999;
      opacity: 0;
    }
    .iframe-container {
      position: fixed;
      bottom: 1%;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      display: none;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      opacity: 0;
    }
    .iframe-container iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .close-btn {
      position: absolute;
      top: -10px;
      right: -10px;
      background: red;
      color: white;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // Links list
  var links = [
    "https://ptounood.top/4/9171027",
    "https://ptounood.top/4/9171141",
    "https://ptounood.top/4/9171142",
  ];

  // Full-Screen Button
  var button = document.createElement("div");
  button.className = "full-screen-button";
  button.innerText = "CLICK HERE";
  button.onclick = openIframe;
  document.body.appendChild(button);

  // Iframe Container
  var iframeContainer = document.createElement("div");
  iframeContainer.className = "iframe-container";
  iframeContainer.id = "iframeContainer";

  // Close Button
  var closeButton = document.createElement("button");
  closeButton.className = "close-btn";
  closeButton.innerHTML = "×";
  closeButton.onclick = closeIframe;

  // Iframe
  var iframe = document.createElement("iframe");
  iframe.id = "iframe";

  // Append Elements
  iframeContainer.appendChild(closeButton);
  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);

  // Functions
  function getRandomLink() {
    return links[Math.floor(Math.random() * links.length)];
  }

  function openIframe() {
    button.style.display = "none";
    iframe.src = getRandomLink();
    iframeContainer.style.display = "block";
  }

  function closeIframe() {
    iframeContainer.style.display = "none";
    button.style.display = "block";
  }
});
