
document.getElementById('generatePost').addEventListener('click', function() {
    const getValue = (id) => document.getElementById(id).value.trim(); 
    const createListItem = (label, value) => value ? `<li><b>${label}:</b> ${value}</li>` : '';

    const postTitle = getValue('postTitle');
    const movieDescription = getValue('movieDescription');
    const bulletPointHeading = getValue('bulletPointHeading');
    const imdbRating = getValue('imdbRating');
    const imdblink = getValue('imdblink');
    const language = getValue('language');
    const quality = getValue('quality');
    const fileSize = getValue('fileSize');
    const formate = getValue('formate');
    const starcast = getValue('starcast');
    const duration = getValue('duration');
    const season = getValue('season');
    const tags = getValue('tagsInput');

    const screenshotLinks = [getValue('screenshot1'), getValue('screenshot2'), getValue('screenshot3'),
                             getValue('screenshot4'), getValue('screenshot5'), getValue('screenshot6')]
                            .filter(Boolean)
                            .map(url => `<img src="${url}">`).join('');

    const downloadLinks = [
    { link: getValue('downloadLink1'), text: '480p', class: 'dbtn1' },
    { link: getValue('downloadLink2'), text: '720p', class: 'dbtn2' },
    { link: getValue('downloadLink3'), text: '1080p', class: 'dbtn3' },
    { link: getValue('downloadLink4'), text: '4K', class: 'dbtn4' },
    { link: getValue('downloadLink5'), text: '8K', class: 'dbtn5' }
].filter(item => item.link)
 .map(item => `<a href="${item.link}" class="dbtn ${item.class}"><i class="fa-solid fa-download"></i>⚡${item.text}</a>`)
 .join('');

const ytLink = getValue('ytLink');
    const videoId = extractVideoID(ytLink);
    const youtubeEmbed = videoId ? `<h2>Trailer</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>` : '';

    const postHtml = `
        <div class="post dkpost">
            ${postTitle ? `<h2 style="color:yellow;">${postTitle}</h2>` : ''}
            ${movieDescription ? `<p>${movieDescription}</p>` : ''}
            <h3 style="color:#ff8800;">Movie Info:</h3>
            <ul>
                ${createListItem('IMDb Rating', imdbRating ? `<a href="${imdblink}">${imdbRating}</a>` : '')}
                ${createListItem('Release Year', bulletPointHeading)}
                ${createListItem('Language', language)}
                ${createListItem('Quality', quality)}
                ${createListItem('File Size', fileSize)}
                ${createListItem('Format', formate)}
                ${createListItem('Starcast', starcast)}
                ${createListItem('Duration', duration)}
                ${createListItem('Season', season)}
            </ul>
            ${youtubeEmbed}
            ${tags ? `<h2>Tags:</h2><p>${tags}</p>` : ''}
            ${screenshotLinks ? `<h3>Screenshots must see before downloading</h3>${screenshotLinks}` : ''}
            ${downloadLinks ? `<h3>Download this movie</h3>${downloadLinks}` : ''}
        </div>
        <link rel="stylesheet" href="https://dktczn.github.io/Dk/cdn/vgpost.css">
        <script src="https://dktczn.github.io/Dk/cdn/plyrimbd.js"/>`;

    // **Generated post ko textarea me dikhana**
    document.getElementById('postContainer').innerHTML = postHtml;
    document.getElementById('postContainer').style.display = 'block';

    // **Generated HTML ko textarea me copy ke liye ready karna**
    const postCodeContainer = document.getElementById('postCodeContainer');
    postCodeContainer.value = postHtml;
    postCodeContainer.style.display = 'block';
    document.getElementById('copyCode').style.display = 'block';
});

// **Copy Button Function**
document.getElementById('copyCode').addEventListener('click', function() {
    const postCodeContainer = document.getElementById('postCodeContainer');
    postCodeContainer.select();
    document.execCommand('copy');
    alert('Post code copied to clipboard!');
});

// **YouTube Link Se ID Extract Karne Wala Function**
function extractVideoID(url) {
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/v\/|.*embed\/|.*shorts\/|.*live\/))([^?&]+)/);
    return match ? match[1] : null;
}
