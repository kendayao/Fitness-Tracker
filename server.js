// require npm packages
const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const db=require("./models")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useUnifiedTopology: true, useNewUrlParser: true});

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// const workoutSeed=require("./seeders/seed.js")

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}!`)
})

