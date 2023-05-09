function getPostContents(postFile) {
    $.getJSON("https://raw.githubusercontent.com/gumball14/blog/main/test/" + postFile, function (data) {
        $("#postTitleEntry").text(data.title);
        $("#postBodyContent").text(data.body);
        $("#postBodyContentSnippet").text(data.body.substr(0, 700) + "...");
    });
}

const url = 'https://api.github.com/repos/gumball14/blog/contents/test';

if (typeof data !== 'undefined' && data.view.isSingleItem) {
    // This is a single post
    console.log('This is a single post');
} else {
    // This is not a single post
    console.log('This is not a single post');
}

const idFile = "post1.json";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`length: ${data.length}; id: ${idFile}`);
        for (let i = 0; i < data.length; i++) {
            const file = data[i];
            console.log(file.name);
            if (file.type === 'file' && file.name.toLowerCase() === idFile.toLowerCase()) {
                getPostContents(idFile);
                break;
            } else {
                getPostContents(file.name);
            }
        }
    });
