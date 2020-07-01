const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// gets back all workouts
router.get('/:user/:first/:second', async (req,res)=>{
   try{
    const workouts = await Workout.find({user: req.params.user, date: { $gte: req.params.first, $lte: req.params.second }});
    res.json(workouts);
   }catch(err){
    res.json({message: err});
   }
});



module.exports = router;