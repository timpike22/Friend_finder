const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  