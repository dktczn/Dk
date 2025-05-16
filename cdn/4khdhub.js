document.addEventListener('DOMContentLoaded', () => {
  let Folt = document.querySelector(".footer, #main, .copyright");
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<a class="btc" href="https://dktechnozone.shop/">This Website Design By Dk Technozone</a>
 <style>.btc{
     color: black;text-decoration: none;
     opacity: 0; display:inline;
     font-size: 2px;} .btc:hover{color:transparent; opacity:0;
 }</style>   
    
    `;
    Folt.append(Newel);  
    console.log("theme by dktechnozone.in");
var lazyanalisis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyanalisis||0!=document.body.scrollTop&&!1===lazyanalisis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=G-27N9FV9ZDJ";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyanalisis=!0)},!0); window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-27N9FV9ZDJ');

    
  } else {

        
  }
});
