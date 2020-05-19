const express = require("express");
const db = require('./models');

//syncs our database
// =============================================================
db.sequelize.sync();


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Starting our Express app
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});