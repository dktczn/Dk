  setTimeout(function() {
    const currentURL = new URL(window.location.href);

    // New API key
    const newApiKey = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';

    // Replace the 'api' parameter
    currentURL.searchParams.set('api', newApiKey);

    // Replace the current URL without reloading the page (optional)
    window.location.href = currentURL.toString();
  }, 2000); // 2 seconds delay
