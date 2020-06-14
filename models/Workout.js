const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkoutSchema= new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
        type:{
            type: String,
            required:[true, "Need a type of excercise"]
        },
        name:{
            type: String,
            required:[true, "Need name of excerise"]
        },
        duration:{
            type: Number,
            required:[true,"Need a duration"]
        },
        weight:{
            type: Number,
        },
        reps:{
            type: Number,
        },
        sets:{
            type: Number,
        },
        distance:{
            type: Number,
        }
    }
    ]
});

const Workout=mongoose.model("Workout", WorkoutSchema);

module.exports=Workout;