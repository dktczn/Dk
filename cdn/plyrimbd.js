document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');
    const iframeContainer = document.querySelector("#IndStreamPlayer");
    const iframe = iframeContainer ? iframeContainer.querySelector("iframe") : null;

    if (allLinks.length > 0 && iframe) {
        const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
        const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

        if (imdbTitleMatch && imdbTitleMatch[1]) {
            const imdbTitle = imdbTitleMatch[1];
            iframe.src = `https://iloplint331bhi.com/play/${imdbTitle}`;
        } else {
            iframeContainer.style.display = "none";
        }
    } else if (iframeContainer) {
        iframeContainer.style.display = "none";
    }
});
