const OMDB_KEY = '684fefc5'; // Replace if needed
  const YT_KEY = 'AIzaSyDMJDSiqd78g52t6W0F0BAMUij5xSynDe0'; // Replace if needed
  let imdbData = {};
  let trailerId = '';

  async function fetchIMDbData() {
    const imdbId = document.getElementById('imdbId').value.trim();
    if (!imdbId) return alert('Please enter an IMDb ID');
    document.getElementById('moviePreview').textContent = 'Loading...';

    try {
      // Fetch movie data
      const res = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=${OMDB_KEY}`);
      const data = await res.json();
      if (data.Response === "False") {
        document.getElementById('moviePreview').textContent = "Error: " + data.Error;
        return;
      }
      imdbData = data;

      // Fetch trailer (YouTube)
      const trailerRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(data.Title + " trailer")}&key=${YT_KEY}&maxResults=1&type=video`);
      const trailerData = await trailerRes.json();
      trailerId = trailerData.items?.[0]?.id?.videoId || '';
      document.getElementById('moviePreview').innerHTML = `
        <b>${data.Title} (${data.Year})</b><br>
        <img src="${data.Poster}" style="max-width:200px;"><br>
        ${data.Plot}
      `;
      document.getElementById('manualFields').style.display = 'block';
    } catch (err) {
      document.getElementById('moviePreview').textContent = "Error: " + err.message;
    }
  }

  function generateCombinedPost() {
    if (!imdbData.Title) return alert('Please fetch movie data first!');
    const quality = document.getElementById('quality').value;
    const fileSize = document.getElementById('fileSize').value;
    const formate = document.getElementById('formate').value;
    const season = document.getElementById('season').value;
    const tags = document.getElementById('tagsInput').value;
    const screenshots = [
      document.getElementById('screenshot1').value,
      document.getElementById('screenshot2').value,
      document.getElementById('screenshot3').value,
      document.getElementById('screenshot4').value,
      document.getElementById('screenshot5').value,
      document.getElementById('screenshot6').value
    ].filter(url => url.trim());
    const downloadLinks = [
      document.getElementById('downloadLink1').value,
      document.getElementById('downloadLink2').value,
      document.getElementById('downloadLink3').value,
      document.getElementById('downloadLink4').value,
      document.getElementById('downloadLink5').value
    ].filter(link => link.trim());
    const autoEmbed = document.getElementById('autoEmbedToggle').checked;
    const xbetPlayer = document.getElementById('xbetPlayerToggle').checked;

    // Download button classes: dbtn dbtn1, dbtn dbtn2, etc.
    const btnClasses = ['dbtn1', 'dbtn2', 'dbtn3', 'dbtn4', 'dbtn1'];

    // Generate post HTML
    let postHtml = `
<link rel="stylesheet" href="https://dhanjeerider.github.io/pj/mvt.css"><div class="backdrop"><img class="backdrop-image" src="${imdbData.Poster}" loading="lazy">
  <img class="poster" src="${imdbData.Poster}" loading="lazy"></div>

<div class="section-title">Summary</div>
<hr>
<p>${imdbData.Plot}</p>
<hr>

<div class="movie-widget"><div class="movie-info">
  <p class="movie-title">💳 Full Name: ${imdbData.Title} [<span style="color:#fdd835;">${imdbData.Year}</span>]</p>
  <p class="movie-summary"><a href="https://www.imdb.com/title/${imdbData.imdbID}/" target="_blank">&#11088; Rating: ${imdbData.imdbRating}</a></p>
  <p class="movie-summary">🎙&#65039; Language: <u style="color:#d1c4e9;">${imdbData.Language}</u></p>
  <p class="movie-summary">🗓&#65039; Released: ${imdbData.Released}</p>
  <p class="movie-summary">🕒 Runtime: ${imdbData.Runtime}</p>
  <p class="movie-summary">🕵&#65039; Starcast: ${imdbData.Actors}</p>
  <p class="movie-summary">🎭 Genre: <u style="color:#d1c4e9;">${imdbData.Genre}</u></p>
  <p class="movie-summary">🎬 Director: ${imdbData.Director}</p>
  <p class="movie-summary">&#9997;&#65039; Writer: ${imdbData.Writer}</p>
  <p class="movie-summary">🏆 Awards: ${imdbData.Awards}</p>
  <p class="movie-summary">💽 Format: ${formate || 'MKV'}</p>
  ${quality ? `<p class="movie-summary">📺 Quality: ${quality}</p>` : ''}
  ${fileSize ? `<p class="movie-summary">💾 File Size: ${fileSize}</p>` : ''}
  ${season ? `<p class="movie-summary">📺 Season: ${season}</p>` : ''}
  <span style="font-size:0.01px; opacity:0"><a href="https://www.dktechnozone.in/">made by DK technozone developer</a></span>
</div></div>
<div class="mt-box color-4">👇Screenshots</div>
${screenshots.map(url => `<img src="${url}" style="max-width:100%; margin:10px 0;">`).join('')}
<hr>
<center>
  <h4>${imdbData.Title} (${imdbData.Year}) - Download</h4>
  ${downloadLinks.map((link, i) => {
    let res = ['480p', '720p', '1080p', '4K', '8K'][i] || '';
    let btnClass = btnClasses[i % btnClasses.length];
    return link ? `<a href="${link}" class="dbtn ${btnClass}" target="_blank" style="display: block; margin: 10px;">
      <i class="fa fa-download"></i><span>Download ${res}</span><i class="fa fa-download"></i>
    </a>` : '';
  }).join('')}
</center>
<hr>
<div class="mt-box color-7">📺 TRAILER</div>
<hr>
${trailerId ? `
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/${trailerId}" frameborder="0" allowfullscreen style="position: absolute; top:0; left:0; width:100%; height:100%;"></iframe>
  
</div>
` : ''}
${autoEmbed ? `
<div class="mt-box color-2">🎬 Watch this movie online (AutoEmbed Player)</div>
<hr>
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://player.autoembed.cc/embed/movie/${document.getElementById('imdbId').value}" frameborder="0" allowfullscreen style="position: absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>
<hr>
` : ''}
${xbetPlayer ? `
<div class="mt-box color-3">🎬 Watch this movie online (1xBet Player)</div>
<hr>
<script src='https://dktczn.github.io/Dk/cdn/plyrimbd.js'/> <div id="dkplyr"></div>
<hr>
` : ''}
<br>
<br>
${tags ? `<p><strong>Tags:</strong> ${tags}</p>` : ''}`;

    document.getElementById('output').value = postHtml;
  }
