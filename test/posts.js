function getPostContents(postFile) {
    $.getJSON("https://raw.githubusercontent.com/gumball14/blog/main/test/posts/" + postFile, function (data) {
        $("#postTitleEntry").text(data.title);
        $("#postBodyContent").text(data.body);
        $("#postBodyContentSnippet").text(data.body.substr(0, 700) + "...");
    });
}


fetch('https://api.github.com/repos/gumball14/blog/contents/test/posts')
        .then(response => response.json())
        .then(data => {
        for (let i = 0; i < data.length; i++) {
            const file = data[i];
            const titleEntry = document.getElementById('postTitleEntry');
            const fileId = titleEntry.innerText + '.json';
            console.log(fileId + ' ' + file.name);
            if (file.type == 'file' && file.name.toLowerCase() === fileId.toLowerCase()) {
                console.log('inside if');
                getPostContents(data[i].name);
				break;
            }
        }
    });
