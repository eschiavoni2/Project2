$(document).ready(() => {

    let member;

    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
        member = data.email;
        console.log(member);
    }).then(() => {

    $.get('/artbook/' + member, function(data) {
        if (data){
            // console.log(data);
        }
    }).then((data) => {
        

        for (i = 0; i < data.length; i++){
            $.get('/idsearch/' + data[i].savedArt).then(art => {
                
                // console.log(art);
                art.forEach((element, index) => {
                    console.log(element);
                    // var newDiv = $('<div>');
                    // newDiv.attr('id', index)
                    // newDiv.append(`<img src="${element.thumbnailUrl}">`)

                    div = $("<div />").html(`
                    <div>
                            <img src="${element.thumbnailUrl}">
                            <p style="color: #000; line-height: 24px;">${element.title}<br><br>${element.artist} ${element.year}</p>
                    </div>`);
                    $("#flipbook").turn("addPage", div, index);

                    // $('#test').add(newDiv);
                });

                // $('#one').append(`<img src="${art[0].thumbnailUrl}">`)
            }).then(()=> {

            })
        }
        
    })
})
});
  