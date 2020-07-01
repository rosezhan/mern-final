const mongoose = require('mongoose');

const WorkoutSchema= mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    length:{
        type: Number,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports =mongoose.model('Workout', WorkoutSchema);