(function () {
      const blogUrl = window.location.origin;
      const feedUrl = `${blogUrl}/feeds/posts/default?alt=json-in-script&max-results=150&callback=browseSearchCallback`;
      let browseAllPosts = [];
      let filteredPosts = [];
      const postsPerPage = 12;
      let currentPage = 1;

      function browseGetThumbnail(item) {
        if (item.media$thumbnail) return item.media$thumbnail.url.replace("s72-c", "s320");
        const html = item.content?.$t || "";
        const m = html.match(/<img.*?src=['"](.*?)['"]/);
        return m ? m[1].replace(/s72-c/, "s620") : "https://via.placeholder.com/320x460?text=No+Image";
      }

      window.browseSearchCallback = function (data) {
        const entries = data.feed?.entry || [];
        browseAllPosts = entries.map((item) => {
          const title = item.title.$t;
          const url = item.link.find((l) => l.rel === "alternate").href;
          const labels = (item.category || []).map((c) => c.term.toLowerCase());
          return { title, url, labels, thumbnail: browseGetThumbnail(item) };
        });
        buildCategoryCheckboxes();
        buildAlphaFilter();
        applyFilters();
      };

      function buildAlphaFilter() {
        const alphaWrap = document.getElementById("alphaFilter");
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        alphaWrap.innerHTML = `<button data-letter="">All</button>` + letters.map(l => `<button data-letter="${l.toLowerCase()}">${l}</button>`).join('');
        alphaWrap.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', () => {
            alphaWrap.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPage = 1;
            applyFilters();
          });
        });
        alphaWrap.querySelector('button[data-letter=""]').classList.add("active");
      }

      function buildCategoryCheckboxes() {
        const catSet = new Set();
        browseAllPosts.forEach(p => p.labels.forEach(l => catSet.add(l)));
        const categories = Array.from(catSet).sort();
        const container = document.getElementById("categoryCheckboxes");
        container.innerHTML = "";
        categories.forEach(cat => {
          const label = document.createElement("label");
          label.innerHTML = `<input type="checkbox" value="${cat}"> ${capitalize(cat)}`;
          container.appendChild(label);
        });

        // Single-checkbox selection logic
        const allLabels = container.querySelectorAll("label");
        allLabels.forEach(label => {
          const checkbox = label.querySelector("input");
          label.addEventListener("click", (e) => {
            e.preventDefault();
            allLabels.forEach(l => {
              l.classList.remove("checked");
              l.querySelector("input").checked = false;
            });
            checkbox.checked = true;
            label.classList.add("checked");
            currentPage = 1;
            applyFilters();
          });
        });
      }

      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      function applyFilters() {
        const searchText = document.getElementById("browse-searchInput").value.trim().toLowerCase();
        const selectedCats = Array.from(document.querySelectorAll("#categoryCheckboxes input:checked")).map(cb => cb.value);
        const activeAlpha = document.querySelector("#alphaFilter button.active")?.dataset.letter || '';

        filteredPosts = browseAllPosts.filter(p => {
          const matchText = p.title.toLowerCase().includes(searchText);
          const matchCat = selectedCats.length === 0 || selectedCats.some(cat => p.labels.includes(cat));
          const matchAlpha = !activeAlpha || p.title.toLowerCase().startsWith(activeAlpha);
          return matchText && matchCat && matchAlpha;
        });

        renderPosts();
      }

      function renderPosts() {
        const grid = document.getElementById("browse-postGrid");
        grid.innerHTML = "";
        const end = currentPage * postsPerPage;
        const visible = filteredPosts.slice(0, end);
        visible.forEach(p => {
          const card = document.createElement("div");
          card.className = "browse-card";
          const labels = p.labels.map(l => `<span>${capitalize(l)}</span>`).join('');
          card.innerHTML = `
            <a href="${p.url}"  rel="noopener">
              <img src="${p.thumbnail}" alt="${p.title}" />
              <div class="browse-info">
                <h4>${p.title}</h4>
                <div class="browse-labels">${labels}</div>
              </div>
            </a>`;
          grid.appendChild(card);
        });

        const btn = document.getElementById("loadMoreBtn");
        if (end >= filteredPosts.length) {
          btn.disabled = true;
          btn.textContent = "No More Posts";
        } else {
          btn.disabled = false;
          btn.textContent = "Load More";
        }
      }

      document.getElementById("loadMoreBtn").addEventListener("click", () => {
        currentPage++;
        renderPosts();
      });

      document.getElementById("browse-searchInput").addEventListener("input", () => {
        currentPage = 1;
        applyFilters();
      });

      // Load Blogger Feed
      const script = document.createElement("script");
      script.src = feedUrl;
      document.body.appendChild(script);
    })();
    
    document.getElementById("clearFiltersBtn").addEventListener("click", () => {
  // Clear search
  document.getElementById("browse-searchInput").value = "";

  // Clear category
  document.querySelectorAll("#categoryCheckboxes label").forEach(label => {
    label.classList.remove("checked");
    label.querySelector("input").checked = false;
  });

  // Clear A-Z filter
  document.querySelectorAll("#alphaFilter button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector('#alphaFilter button[data-letter=""]').classList.add("active");

  // Reset page and reapply filters
  currentPage = 1;
  applyFilters();
});
