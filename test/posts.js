function getPostContents(postFile) {
    $.getJSON("https://raw.githubusercontent.com/gumball14/blog/main/test/" + postFile, function (data) {
        $("#postTitleEntry").text(data.title);
        $("#postBodyContent").text(data.body);
        $("#postBodyContentSnippet").text(data.body.substr(0, 700) + "...");
    });
}

const url = 'https://api.github.com/repos/gumball14/blog/contents/test';

if (typeof data !== 'undefined' && data.view.isSingleItem) {
    const idFile = $(document).find("title").text() + ".json";
    getPostContents(idFile);
} else {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        for (let i = 0; i < data.length; i++) {
            getPostContents(data[i].name);
        }     
    }
}
