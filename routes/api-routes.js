const db = require("../models")

module.exports=function(app){

app.get("/api/workouts", function(req, res){
    db.Workout.find({}, function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    });
});















}


// app.get("/api/workouts", function(req, res){
//     db.Workout.find({}).then(function(workout){
//         res.json(workout)
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// });