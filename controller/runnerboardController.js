const Runnerboard = require('../models/Runnerboard')


const createRunnerboard = async(req,res) => {
    try {
        const {name, date , milesrun} = req.body 
        const runnerboard = new Runnerboard({
            name,
            date,
            milesrun
        })
        await runnerboard.save()
        res.status(200).json(runnerboard)
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:"Server error"})
    }
}

const getRunnerBoard = async(req,res) => {
    try {
        const getallRunnersData = await Runnerboard.find()
        res.status(200).json(getallRunnersData)
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:"Server error"})
    }
}

const deleteRunner = async(req,res) =>{
    try {
        const delRunner = await Runnerboard.findByIdAndDelete(req.params.id)
        res.status(200).json("Runner deleted successfully")
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:"Server error"})
    }
}

module.exports = {createRunnerboard, getRunnerBoard , deleteRunner}