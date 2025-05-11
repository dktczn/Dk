document.addEventListener("DOMContentLoaded", function () {
    let mainElement = document.querySelector("#dkplyr");
    if (!mainElement) {
        mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body, .dwd-btn");
    }

    if (mainElement) {
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');
        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href;
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                const iframeContainer = document.createElement("div");
                iframeContainer.style.textAlign = "center";
                iframeContainer.style.marginTop = "20px";

                const iframeWrapper = document.createElement("div");
                iframeWrapper.style.position = "relative";
                iframeWrapper.style.width = "100%";
                iframeWrapper.style.maxWidth = "1000px";
                iframeWrapper.style.paddingBottom = "56.25%";
                iframeWrapper.style.height = "0";
                iframeWrapper.style.overflow = "hidden";
                iframeWrapper.style.margin = "auto";

                const iframe = document.createElement("iframe");
                iframe.src = `https://lp352engiao.com/play/${imdbTitle}`;
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "allowfullscreen");

                iframeWrapper.appendChild(iframe);
                iframeContainer.appendChild(iframeWrapper);
                mainElement.appendChild(iframeContainer);
            }
        }
    }
});
