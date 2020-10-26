let member;

$(document).ready(() => {

    

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
            
            art.forEach((element, index) => {
                console.log(element);
                div = $("<div />").html(`
                <div>
                        <img src="${element.thumbnailUrl}">
                        <p style="color: #000; line-height: 24px;">${element.title}<br><br>${element.artist} ${element.year}<br><br><button art-id="${element.id}" class="btn btn-success btn-block deleteArt">Remove from your Artbook</button></p>
                </div>`);
                $("#flipbook").turn("addPage", div, index);

            });
        })
    }
    
    })
})
});

$('body').on('click', '.deleteArt', function(event) {
    event.preventDefault()
  
    let artID = event.target.getAttribute('art-id');
    console.log(member);
    console.log(artID);
  
    $.get("/api/delete/" + member + "/" + artID).then(() => {
      console.log('saved');
    })
  })
  