$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

var artistSearch = $("#artistSearch");

$(artistSearch).on("submit", function handleFormSubmit(event) {
  event.preventDefault()
  $('.results').empty();
    var name = $("#search");

    $.get("/namesearch/" + name.val().trim(), function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        console.log(data);
        for(i = 0; i < data.length; i++) {
          if(data[i].thumbnailUrl !== '\"\"') {
            
            var imageDiv = $('<div>')
            var imageCard = $('<div>')
            var imageTitle = $('<h5>')
            var imageArtist = $('<p>')
            var artImage = $('<img>')

            imageTitle.attr('class', 'card-title');
            imageArtist.attr('class', 'card-text')

            imageTitle.text(data[i].title)
            imageArtist.text(`${data[i].artist} ${data[i].year}`)

            imageDiv.attr('class', 'col-md-3 col-sm-6 text-center')
            
            console.log(data[i].thumbnailUrl);
            artImage.attr('src', data[i].thumbnailUrl);
            artImage.attr('class', 'card-img-top');
            imageCard.append(artImage);
            imageCard.append(imageTitle);
            imageCard.append(imageArtist);
            imageDiv.append(imageCard);
            $('.results').append(imageDiv);
          }
        }

      }
    });
})