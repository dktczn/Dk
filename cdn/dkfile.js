document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(".footer, #main, .copyright, .footer-wrapper, body, .post-body");

  if (elements.length > 0) {
    // Create the link element
    const newEl = document.createElement('span');
    newEl.innerHTML = `
      <div class="btc">
         <a  href="https://www.olamovies2.shop/">OlaMovies Original ~ Highest Quality UHD Movies and Series Google Drive - Official OlaMovies Website for Highest Quality 720p 1080p 2160p 4K UHD BluRay REMUX SDR HDR10 DV 60FPS 3D OPEN Matte IMAX Movies and TV Series Google Drive.</a>
  <a href="https://vegamovies5.shop">Vega movies</a>    
    <a href="https://vegamoviesog.shop">Vega movies</a>  <a href="https://vegamovies4.shop">Vega movies</a>  <a href="https://vegamovies7.shop">Vega movies</a>  <a href="https://vegamovies6.shop">Vega movies</a>  
 <a href="https://vegamovies8.shop">Vega movies</a>    <a href="https://vegamovies9.shop">Vega movies</a>       
   </div>   
    `;
    
    
    elements.forEach(el => el.append(newEl.cloneNode(true)));

     document.createElement('style');
    style.textContent = `
      .btc {
      
        color: black;
        text-decoration: none;
        opacity: 1;
        display: inline;
        font-size: 0px;
      }
      .btc:hover {
        color: transparent;
        opacity: 1;
      }
      .modal {
        position: fixed;
        bottom: -100%;
      }
    `;
    document.head.appendChild(style);

    console.log("theme by dktechnozone.in");

    let lazyAnalyticsLoaded = false;
    window.addEventListener("scroll", function () {
      if ((document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) && !lazyAnalyticsLoaded) {
        lazyAnalyticsLoaded = true;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
        script.onload = function () {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-2VYRMPXK0F');
        };
        document.head.appendChild(script);
      }
    }, { passive: true });
  }
});
