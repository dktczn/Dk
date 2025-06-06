setTimeout(function() {
    const currentURL = new URL(window.location.href);

    const newApiKey = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';

    currentURL.searchParams.set('api', newApiKey);

    window.location.href = currentURL.toString();
  }, 2000); 
