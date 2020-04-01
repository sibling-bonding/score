function loadJS(urls) {
    if (urls.length > 0){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = urls[0];
        document.head.appendChild(script);
        script.onload = function(){
            loadJS(urls.slice(1));
        };
    }
}

loadJS([
    "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
]);