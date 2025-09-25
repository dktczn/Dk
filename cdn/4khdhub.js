var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-27N9FV9ZDJ";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-27N9FV9ZDJ');
// list me domain add karo — exact ya wildcard form ('*.domain.com')
const allowedDomains = [
  "vegamovies4.shop",      // exact (no www)
  "www.vegamovies4.shop",  // explicit www
  "*.vegamovies4.shop" ,
  "hdhub4u.vercel.app"// any subdomain (eg. app.vegamovies4.shop)
];

(function injectIfAllowed() {
  const host = window.location.hostname.toLowerCase();

  const isAllowed = allowedDomains.some(pattern => {
    pattern = pattern.toLowerCase().trim();
    if (!pattern) return false;

    // wildcard pattern: *.example.com
    if (pattern.startsWith("*.") ) {
      const base = pattern.slice(2); // example.com
      return host === base || host.endsWith("." + base);
    }

    // exact match
    return host === pattern;
  });

  // agar allowed hai aur script pehle se nahi lagi ho to inject karo
  if (isAllowed && !document.querySelector('script[data-zone="9728461"]')) {
    const s = document.createElement('script');
    s.dataset.zone = '9728461';
    s.src = 'https://al5sm.com/tag.min.js';
    s.async = true;
    s.setAttribute('data-zone','9728461'); // double-safe selector
    // append to <head> agar available, warna <html> ya <body>
    const container = document.head || document.documentElement || document.body;
    container.appendChild(s);
  }
})();
