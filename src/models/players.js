const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    pos:{type:Number, required:true, unique:true},
    name:{type:String, required:true},
    country:{type:String, required:true},
    points:{type:Number, required:true}
})

const Player = new mongoose.model("Player", PlayerSchema)

module.exports = Player