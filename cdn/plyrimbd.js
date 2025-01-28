document.addEventListener("DOMContentLoaded", function () {
    const postBodyElement = document.querySelector(".post-body"); // .post-body element ko select karein
    const entryContentElement = document.querySelector(".entry-content"); // .entry-content element ko select karein

    if (postBodyElement && entryContentElement) { // Check if both elements exist
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                // Naya div banayein aur usme iframe HTML insert karein
                const iframeContainer = document.createElement("div");
                iframeContainer.innerHTML = `
                   <iframe 
                        src="https://iloplint331bhi.com/play/${imdbTitle}" 
                        width="797" 
                        height="453" 
                        frameborder="0" 
                        allowfullscreen="allowfullscreen">
                   </iframe>
                `;

                // .post-body aur .entry-content mein iframeContainer ko append karein
                postBodyElement.appendChild(iframeContainer); // .post-body mein append
                entryContentElement.appendChild(iframeContainer); // .entry-content mein append
            } else {
                console.error("IMDb title match nahi hua");
            }
        } else {
            console.error("IMDb link nahi mila");
        }
    } else {
        console.error(".post-body or .entry-content element not found in the document.");
    }
});
