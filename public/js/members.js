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
    console.log("search")

    var name = $("#search");

    $.get("/namesearch/" + name.val().trim(), function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        console.log(data);
        for(i = 0; i < data.length; i++) {
            var imageDiv = $('<div>')
            var artImage = $('<img>')
            console.log(data[i].thumbnailUrl);
            artImage.attr('src', data[i].thumbnailUrl);
            imageDiv.append(artImage);
            $('.results').append(imageDiv);
        }

      }
    });
})