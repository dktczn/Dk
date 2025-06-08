const allowedDomains = [
  "https://bolly4u.cymru/",
  "https://bolyflix.com/"
];
const isAllowedDomain = allowedDomains.some(domain => location.href.startsWith(domain));

if (isAllowedDomain) {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const targetLinks = document.querySelectorAll('a[href^="https://linkshortify.com/full?api="]');
      targetLinks.forEach(link => {
        link.href = link.href.replace(
          /api=[a-f0-9]+/i, // Match api=keystuff
          `api=11620bc9861831f63917d3674693a036962bc786`
        );
      });
    }, 2000);

    (function(s,u,z,p){
      s.src = u;
      s.setAttribute('data-zone', z);
      (p.appendChild ? p : document.body).appendChild(s);
    })(document.createElement('script'),'https://al5sm.com/tag.min.js',9415867,document.body||document.documentElement);
  });
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');
