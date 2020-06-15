
var path=require("path")


module.exports=function(app){

// route to homepage
app.get("/",function(req,res){
    res.sendFileres.sendFile(path.join(__dirname, "../public/index.html"));
});

// route to excercise page
app.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// route to stats page
app.get("/stats", function(req,res){
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


};
