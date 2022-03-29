$(document).ready(() => {
    $('#btn').click(() => {
        // wariant 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done((data) => {
        //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
        //         let hr = $('<hr/>');

        //         let jqBody = $('body');

        //         jqBody.append(pId);
        //         jqBody.append(pUserId);
        //         jqBody.append(pTitle);
        //         jqBody.append(pBody);
        //         jqBody.append(hr);
        //     })
        //     .fail((error) => {
        //         console.error(error);
        //     })

        // wariant 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done((data) => {
                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
                let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
                let hr = $('<hr/>');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })
            .fail((error) => {
                console.error(error);
            })
    })
})
