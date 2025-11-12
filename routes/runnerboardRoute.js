const express = require('express')
const router = express.Router()
const runnerboardController = require('../controller/runnerboardController')
const Runnerboard = require('../models/Runnerboard')



router.post('/add-runnerboard', runnerboardController.createRunnerboard)
router.get('/allrunners', runnerboardController.getRunnerBoard)
router.delete('/deleterunner/:id',runnerboardController.deleteRunner)

module.exports = router