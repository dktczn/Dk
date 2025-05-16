(function () {
    const newToken = 'ea96bc4942aa3d3737f7d767f7d9c6f2704a391c';

    // 1. Script tags ke andar search karna
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        if (script.innerHTML.includes('app_api_token')) {
            script.innerHTML = script.innerHTML.replace(/app_api_token\s*=\s*['"][^'"]+['"]/, `app_api_token = '${newToken}'`);
        }
    });

    // 2. Text nodes (rare case: kisi tag me likha ho)
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (treeWalker.nextNode()) {
        let node = treeWalker.currentNode;
        if (node.nodeValue.includes('app_api_token')) {
            node.nodeValue = node.nodeValue.replace(/app_api_token\s*=\s*['"][^'"]+['"]/, `app_api_token = '${newToken}'`);
        }
    }

    // 3. Direct overwrite JS variable
    window.app_api_token = newToken;

    console.log("Token replace and overwrite done.");
})();
