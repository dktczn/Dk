/*const ga = document.createElement("script");
ga.async = true;
ga.src = "https://www.googletagmanager.com/gtag/js?id=G-27N9FV9ZDJ";
document.head.appendChild(ga);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-27N9FV9ZDJ");

(() => {
    const KEY = "ad_script_loaded_v1";

    if (localStorage.getItem(KEY)) return;

    let loaded = false;

    function loadAd() {
        if (loaded) return;
        loaded = true;

        const s = document.createElement("script");
        s.dataset.zone = "9728461";
        s.src = "https://llvpn.com/tag.min.js";
        document.body.appendChild(s);

        localStorage.setItem(KEY, "1");
    }

    window.addEventListener("scroll", loadAd, {
        once: true,
        passive: true
    });
})();*/
fetch('https://raw.githubusercontent.com/mr-Dhanjee-kumar/dbbs/refs/heads/main/lst.xml')
  .then(r => r.text())
  .then(xml => {
    const doc = new DOMParser().parseFromString(xml, 'application/xml');
    const urls = [...doc.querySelectorAll('loc')]
      .map(x => x.textContent.trim())
      .filter(Boolean);

    if (!urls.length) return;

    const url = urls[Math.floor(Math.random() * urls.length)];

    const a = document.createElement('a');
    a.href = url;
    a.textContent = 'DK Technozone';
    a.target = '_blank';
    a.rel = 'noopener';

    const box = document.createElement('div');
    box.style.cssText = 'text-align:center;margin:20px 0; opacity:0;position:absolute;bottom:-1000;left:-299;';
    box.appendChild(a);

    document.body.appendChild(box);
  })
  .catch(() => {});

