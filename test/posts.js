function getPostContents(postFile) {
    $.getJSON("https://raw.githubusercontent.com/gumball14/blog/main/test/posts" + postFile, function (data) {
        $("#postTitleEntry").text(data.title);
        $("#postBodyContent").text(data.body);
        $("#postBodyContentSnippet").text(data.body.substr(0, 700) + "...");
    });
}

const url = 'https://api.github.com/repos/gumball14/blog/contents/test/posts';

if (typeof data !== 'undefined' && data.view.isSingleItem) {
    console.log('single item');
    const idFile = $(document).find("title").text() + ".json";
    getPostContents(idFile);
} else {
    console.log('multiple items');
    const titleEntry = document.getElementById('postTitleEntry');
    const fileId = titleEntry.innerText;
    getPostContents(fileId);
}
