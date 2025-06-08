// Gtag script - har site pe load hogi
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');

// Yahan custom domains add karein (jahan ads aur shortener chahiye)
const allowedDomains = [
  "https://bolly4u.cymru/",
  "https://bolyflix.com/"
  // Yahan aur domains add kar sakte hain
];

// Check karein ki current URL kisi bhi allowed domain se shuru ho raha hai
const isAllowedDomain = allowedDomains.some(domain => location.href.startsWith(domain));

if (isAllowedDomain) {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      // Shortener script
      const targetLinks = document.querySelectorAll('a[href^="https://linkshortify.com/full?api="]');
      targetLinks.forEach(link => {
        const oldUrl = new URL(link.href);
        const newUrl = oldUrl.href.replace(
          /api=\w+/gi, 
          `api=11620bc9861831f63917d3674693a036962bc786`
        );
        link.href = newUrl;
      });
    }, 2000);

    // Ad script sirf yahan load hoga
    (function(s,u,z,p){
      s.src = u;
      s.setAttribute('data-zone', z);
      (p.appendChild ? p : document.body).appendChild(s);
    })(document.createElement('script'),'https://al5sm.com/tag.min.js',9415867,document.body||document.documentElement);
  });
}
