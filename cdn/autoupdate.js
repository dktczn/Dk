setTimeout(function() {
    const links = document.querySelectorAll('a[href*="dashboard.smallshorts.com/full?api="]');
    const newApi = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';

    links.forEach(function(anchor) {
      const url = new URL(anchor.href);
      url.searchParams.set('api', newApi);
      anchor.href = url.toString();
    });
  }, 2000);
