// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  //SEARCH ENDPOINTS
  app.get('/api/namesearch/:name', (req, res) => {

    var firstName = req.params.name.split(' ').slice(0, -1).join(' ');
    var lastName = req.params.name.split(' ').slice(-1).join(' ');
    
    var name = `${lastName}, ${firstName}`
    
      console.log(name);
      
      db.artwork_data.findAll({
        where: {
          artist: name
        }
      }).then(users => res.json(users))
    });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/art", (req, res) => {
    app.get(
      "SELECT artist_data_csv.name, artist_data_csv.placeOfBirth, artist_data_csv.gender, artist_data_csv.dates, artwork_data.title, artwork_data.dateText, artwork_data.medium, artwork_data.year, artwork_data.thumbnailUrl FROM artist_data_csv INNER JOIN artwork_data on artist_data_csv.id = artwork_data.artistId WHERE artist_data_csv.id = 10093", 
      function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
