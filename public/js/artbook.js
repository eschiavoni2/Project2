$(document).ready(() => {

    let member;

    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
        member = data.email;
        console.log(member);
    }).then(() => {

    $.get('/artbook/' + member, function(data) {
        if (data){
            console.log(data);
        }
    }).then((data) => {
        let savedArt = [];

        for (i = 0; i < data.length; i++){
            $.get('/idsearch/' + data[i].savedArt).then(art => {
                savedArt.push(art)
                console.log(art[0]);
                // $('.addHere').append(`<div><img src="${art[0].thumbnailUrl}"></div>`)
            }).then(()=> {

            })
        }
        console.log(savedArt);
    })
})
});
  