const mongoose = require('mongoose');

const ExerciseSchema= mongoose.Schema({
    title: {
        type: String,
        required: true
    }
 
});

module.exports =mongoose.model('Exercise', ExerciseSchema);