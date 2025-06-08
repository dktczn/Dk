<!-- Gtag script - har site pe load hogi -->
<script>
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
  document.addEventListener("DOMContentLoaded", function () {
    const oldApiKey = "7802f076148b781e00fa9c649c7be14d122ba62e";
    const newApiKey = "11620bc9861831f63917d3674693a036962bc786"; // New API key

    // Sirf #main ke andar ke <a> tags par chale
    const targetLinks = document.querySelectorAll('#main a');

    targetLinks.forEach(link => {
      // Sirf oldApiKey ko replace karega, baaki kuchh nahi
      link.href = link.href.replace(
        new RegExp(`api=${oldApiKey}`, "i"),
        `api=${newApiKey}`
      );
    });

    // Ad script sirf yahan load hoga
    (function(s,u,z,p){
      s.src = u;
      s.setAttribute('data-zone', z);
      (p.appendChild ? p : document.body).appendChild(s);
    })(document.createElement('script'),'https://al5sm.com/tag.min.js',9415867,document.body||document.documentElement);
  });
}
</script>
