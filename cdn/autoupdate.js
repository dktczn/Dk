document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const targetLinks = document.querySelectorAll('a[href^="https://dashboard.smallshorts.com/full?api="]');
        
        targetLinks.forEach(link => {
            const oldUrl = new URL(link.href);
            const newUrl = oldUrl.href.replace(
                /api=\w+/gi, 
                `api=ea96bc4942aa3d3737f7d767f7d9c6f2704a391c`
            );
            link.href = newUrl;
        });
    }, 2000); // 2 seconds delay

var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-88SW9D6YBK');

});
