const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// gets back all exercises
router.get('/', async (req,res)=>{
   try{
    const exercises = await Exercise.find();
    res.json(exercises);
   }catch(err){
    res.json({message: err});
   }
});
// Submits the exercise
router.post('/', async (req, res)=>{
    const exercise = new Exercise({
        title: req.body.title,        
    });
    try {
        const savedExercises = await exercise.save();
        res.json(savedExercises);
    }catch (err){
        res.json({message:err});
    }
    

});

// Specific exercise

router.get('/:exerciseId', async (req, res)=>{
    try{
    const exercise = await Exercise.findById(req.params.exerciseId);
    res.json(exercise);
    }catch (err){
        res.json({message: err});
    }
});

// Delete a Specific exercise
router.delete('/:exerciseId', async (req, res)=>{
    try{
    const removedExercise = await Exercise.deleteOne({_id: req.params.exerciseId});
    res.json(removedExercise);
    }catch (err){
        res.json({message: err});
    }
});

// Update a Specific exercise
router.patch('/:exerciseId', async (req, res)=>{
    try{
    const updatedExercise = await Exercise.updateOne(
        {_id: req.params.exerciseId},
        {$set:{title: req.body.title}}
        );
    res.json(updatedExercise);
    }catch (err){
        res.json({message: err});
    }
});
module.exports = router;