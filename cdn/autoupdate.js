document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const targetLinks = document.querySelectorAll('a[href^="https://dashboard.smallshorts.com/full?api="]');
        
        targetLinks.forEach(link => {
            const oldUrl = new URL(link.href);
            const newUrl = oldUrl.href.replace(
                /api=\w+/gi, 
                `api=ea96bc4942aa3d3737f7d767f7d9c6f2704a391c`
            );
            link.href = newUrl;
        });
    }, 2000); // 2 seconds delay
});
