// var mysql = require("mysql");
// var inquirer = require("inquirer");
// // create the connection information for the sql database
// var connection = mysql.createConnection({
//   host: "localhost",
//   // Your port; if not 3306
//   port: 3306,
//   // Your username
//   user: "root",
//   // Your password
//   password: "root",
//   database: "plants"
// });


// $('#flipbook').turn({gradients: true, acceleration: true});

// let saveBtn = document.querySelector("button").addEventListener("change", function (){
//     console.log(this.user_data)
// })
// let artImage = document.querySelector('savedArt');

// saveBtn.addEventListener('click', () => {
//     let artImage = img.getAttribute('src');
//     let artbook = getFileName(imgPath);

//     saveAs(imgPath, fileName)

// });

// function getFileName(str){
//     return str.substring(str.lastIndexOf('/')+1);
// }

// $(document).on("click", ".img-c.active", function() {
//     let copy = $(this)
//     copy.removeClass("positioned active").addClass("postactive")
//     setTimeout(function() {
//     copy.remove();
//     }, 500)
//     })
//     $("#pageFld").val($("#flipbook").turn("page"));

//     $("#flipbook").bind("turned", function (event, page, view) {
//         $("#pageFld").val(page);
//     });

//     $("#pageFld").change(function () {
//         $("#flipbook").turn("page", $(this).val());
//     });

