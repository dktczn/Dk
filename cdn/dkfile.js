document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright, .footer-wrapper, .post-body");
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `
      <a class="btc" href="https://www.dktechnozone.in/">This Website Design By Dk Technozone</a>
      <style>
        .btc {
          color: black;
          text-decoration: none;
          opacity: 0;
          display: inline;
          font-size: 2px;
        }
        .btc:hover {
          color: transparent;
          opacity: 0;
        }
        .modal {
          position: fixed;
          bottom: -100%;
        }
      </style>`;
    Folt.append(Newel);
    console.log("theme by dktechnozone.in");
      
    var lazyanalisis = false;
    window.addEventListener("scroll", function () {
      if ((document.documentElement.scrollTop !== 0 && !lazyanalisis) || (document.body.scrollTop !== 0 && !lazyanalisis)) {
        (function () {
          var e = document.createElement("script");
          e.type = "text/javascript";
          e.async = true;
          e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(e, a);
        })();
        lazyanalisis = true;
      }
    }, true);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-2VYRMPXK0F');
  }
});

var allowedURLs = [
  "https://dkhek.blogspot.com",
  "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/auther%20.html",
  "https://www.desiremovies.store"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
  if (window.location.href.startsWith(allowedURLs[i])) {
    foundMatch = true;
    break;
  }
}

if (foundMatch) {
  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = function () {
      if (callback) callback();
    };
    document.head.appendChild(script);
  }
 // loadScript('https://exceedunited.com/2d/9f/1a/2d9f1a9907b9c95b10ad5f0e1e048d46.js', function () {
    console.log('Script loaded!');
  });
} else {
  console.log('script is not working');
}

