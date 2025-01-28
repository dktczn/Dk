document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector("#main"); // #main element ko select karein

        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');
        const iframeContainer = document.querySelector("#IndStreamPlayer");

        if (allLinks.length > 0) {
          const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                // Iframe HTML dynamically insert karein
                iframeContainer.innerHTML = `
                   <h3> watch this movie online</h3><iframe 
                        src="https://iloplint331bhi.com/play/${imdbTitle}" 
                        width="797" 
                        height="453" 
                        frameborder="0" 
                        allowfullscreen="allowfullscreen">
                    </iframe>
                `;
            } else {
                iframeContainer.style.display = "none"; // IMDb title na mile to container hide karein
            }
        } else {
            iframeContainer.style.display = "none"; // IMDb link na mile to container hide karein
        }
    } else {
        console.error("Main element (#main) not found in the document.");
    }
mainElement.appendChild(iframeContainer);
});
