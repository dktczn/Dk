document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

    // HTML structure: iframe container
    const iframeHTML = `
        <div id="IndStreamPlayer" class="iframe-container">
            <iframe 
                src="" 
                width="797" 
                height="453" 
                frameborder="0" 
                allowfullscreen="allowfullscreen">
            </iframe>
        </div>
    `;

    // Insert HTML structure into body
    document.body.insertAdjacentHTML("beforeend", iframeHTML);

    const iframeContainer = document.querySelector("#IndStreamPlayer");
    const iframe = iframeContainer.querySelector("iframe");

    if (allLinks.length > 0) {
        const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
        const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

        if (imdbTitleMatch && imdbTitleMatch[1]) {
            const imdbTitle = imdbTitleMatch[1];
            iframe.src = `https://iloplint331bhi.com/play/${imdbTitle}`;
        } else {
            iframeContainer.style.display = "none"; // IMDb title na mile to container hide karein
        }
    } else {
        iframeContainer.style.display = "none"; // IMDb link na mile to container hide karein
    }
});
