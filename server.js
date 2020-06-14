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

require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {useUnifiedTopology: true, useNewUrlParser: true});

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}!`)
})
