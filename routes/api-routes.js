// require Workout model
const db = require("../models")

module.exports=function(app){

// finds all the workouts in the database
app.get("/api/workouts", function(req, res){
    db.Workout.find({}, function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    });
});

// finds all the current workouts sorts them descending and grabs the id of the latest workout to update
app.put("/api/workouts/:id", function(req, res){
    db.Workout.find({},null,{sort:{date:-1}},function(err,data){
        if(err){
            console.log(err)
        }else
        console.log(data[0]._id)
    db.Workout.updateOne({_id:data[0]._id}, {$push: {exercises:req.body}}, function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
    });
})

// creates a new workout and add to database
app.post("/api/workouts", function(req, res){
    db.Workout.create(req.body), function(err,data){
        if (err){
            console.log(err)
        }else{
            res.json(data)
        }
    }
    
})



// finds all the workouts in database
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

