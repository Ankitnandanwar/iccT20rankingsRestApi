const express = require('express')
const router = new express.Router()
const Player = require("../models/players");


// create data of player through POST

router.post("/players", async (req, res) => {
    try{
        const user = new Player(req.body)
        // console.log(user)
        const createPlayer = await user.save();
        return res.status(201).send(createPlayer)
    }catch(e){
        return res.status(400).send(e)
    }
})



// Read player details through GET method

router.get('/players', async (req,res)=>{
  try {
    const GetPlay = await Player.find({}).sort({"pos":1})
    res.status(201).send(GetPlay)
  } catch (error) {
    res.status(404).send(error)
  }  
})



// Read individual player details through GET Method

router.get('/players/:id', async (req,res)=>{
  try {
    const IdividualPly = await Player.findById(req.params.id)
    res.status(201).send(IdividualPly)
  } catch (error) {
    res.status(404).send(error)
  }
})



// Delete Player data through DELETE method by Id

router.delete('/players/:id', async(req,res)=>{
  try {
    const DelPlay = await Player.findByIdAndDelete(req.params.id)
    res.status(201).send(DelPlay)
  } catch (error) {
    res.status(404).send(error)
  }
})



// Update any field of player details using patch method

router.patch('/players/:id', async (req,res)=>{
    try {
      const UpdatePlay = await Player.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.status(201).send(UpdatePlay)
    } catch (error) {
      res.status(404).send(error)
    }
})

module.exports = router;
