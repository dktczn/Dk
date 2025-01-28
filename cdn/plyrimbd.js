document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body"); // #main element ko select karein

    if (mainElement) { // Check if #main exists
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                // Naya div banayein aur usme iframe HTML insert karein
                const iframeContainer = document.createElement("div");
                iframeContainer.innerHTML = `
                  <center> <h3>Watch this movie online</h3>
                   <iframe 
                        src="https://iloplint331bhi.com/play/${imdbTitle}" 
                        width="797" 
                        height="453" 
                        frameborder="0" 
                        allowfullscreen="allowfullscreen">
                   </iframe></center>`;

                // #main ke niche iframeContainer ko append karein
                mainElement.appendChild(iframeContainer);
            } else {
                console.error("IMDb title match nahi hua");
            }
        } else {
            console.error("IMDb link nahi mila");
        }
    } else {
        console.error("Main element (#main) not found in the document.");
    }
});
