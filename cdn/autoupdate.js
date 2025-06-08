window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');

const allowedDomains = [
  "https://bolly4u.cymru/",
  "https://xhamster.bz/"
];

const isAllowedDomain = allowedDomains.some(domain => location.href.startsWith(domain));

if (isAllowedDomain) {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
      const oldApiKey = "7802f076148b781e00fa9c649c7be14d122ba62e";
      const newApiKey = "11620bc9861831f63917d3674693a036962bc786";

      const targetLinks = document.querySelectorAll('#main a');
      targetLinks.forEach(link => {
        link.href = link.href.replace(
          new RegExp(`api=${oldApiKey}`, "i"),
          `api=${newApiKey}`
        );
      });

      (function(s,u,z,p){
        s.src = u;
        s.setAttribute('data-zone', z);
        (p.appendChild ? p : document.body).appendChild(s);
      })(document.createElement('script'),'https://al5sm.com/tag.min.js',9415867,document.body||document.documentElement);
    }, 2000); // 2 seconds delay
  });
}
