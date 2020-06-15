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

app.put("/api/workouts/:id", function(req, res){
    console.log(req.params.id)
    db.Workout.updateOne({id:req.params.id}, {$push: {exercises:req.body}}, { new: true }, function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(data)
            console.log(data)
        }
    })

})


app.post("/api/workouts", function(req, res){
    db.Workout.create(req.body), function(err,data){
        if (err){
            console.log(err)
        }else{
            res.json(data)
        }
    }

})




app.get("/api/workouts/range", function(req, res){
    db.Workout.find({}, function(err, data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }

    })
})









}


// app.get("/api/workouts", function(req, res){
//     db.Workout.find({}).then(function(workout){
//         res.json(workout)
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// });