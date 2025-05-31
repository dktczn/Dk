var lazyanalisis = false;
window.addEventListener("scroll", function () {
  if (
    (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) &&
    lazyanalisis === false
  ) {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-88SW9D6YBK");
    lazyanalisis = true;
  }
}, true);

function() {
    const oldKey = "ef1061573339a4ad0e06ff86e5549532fbb42083";
    const newKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    // Function to replace keys in all elements
    function replaceAPIKeys() {
        document.querySelectorAll('a').forEach(element => {
            // Check all attributes that might contain URLs
            Array.from(element.attributes).forEach(attr => {
                if (attr.value.includes(oldKey)) {
                    element.setAttribute(attr.name, attr.value.replace(oldKey, newKey));
                }
            });
        });
    }

    // Initial replacement
    replaceAPIKeys();

    // MutationObserver for dynamic content
    const observer = new MutationObserver(mutations => {
        mutations.forEach(() => {
            replaceAPIKeys();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    });
