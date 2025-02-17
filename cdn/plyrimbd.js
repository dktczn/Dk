document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');
    let iframeContainer = document.querySelector("#IndStreamPlayer");
    let appendedTo = null; // Log ke liye variable

    // Agar iframe container nahi milta to naye div ko append karenge
    if (!iframeContainer) {
        iframeContainer = document.createElement("div");
        iframeContainer.id = "IndStreamPlayer";
        iframeContainer.className = "iframe-container";

        const mainContainer = document.querySelector(".entry-content .post-published .post-body #main .post #content");
        if (mainContainer) {
            mainContainer.insertAdjacentElement("afterend", iframeContainer);
            appendedTo = mainContainer;
        } else {
            
        }

        console.log("✅ Iframe container appended to:", appendedTo);
    }

    // Responsive Wrapper
    iframeContainer.style.position = "relative";
    iframeContainer.style.width = "100%";
    iframeContainer.style.paddingTop = "56.25%"; // 16:9 Aspect Ratio

    // Iframe Create
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");

    if (allLinks.length > 0) {
        const imdbUrl = allLinks[0].href; // Sirf pehla IMDb link consider karein
        const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

        if (imdbTitleMatch && imdbTitleMatch[1]) {
            const imdbTitle = imdbTitleMatch[1];
            iframe.src = `https://iloplint331bhi.com/play/${imdbTitle}`;
            iframeContainer.appendChild(iframe);
            console.log("🎬 Iframe src set to:", iframe.src);
        } else {
            iframeContainer.style.display = "none";
            console.log("❌ IMDb ID not found, hiding iframe container.");
        }
    } else {
        iframeContainer.style.display = "none";
        console.log("❌ No IMDb link found, hiding iframe container.");
    }
});
