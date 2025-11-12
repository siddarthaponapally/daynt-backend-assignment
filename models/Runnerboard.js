const mongoose = require('mongoose')


const runnerboardSchema = new mongoose.Schema({
    // name , date , milesrun

    name : {
        type : String,
        required : true
    },
    date : {
        type : Date ,
        required : true
    },
    milesrun : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Runnerboard', runnerboardSchema)