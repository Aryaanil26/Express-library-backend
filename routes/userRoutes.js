const express = require('express')
const { getAllUsers, addUser } = require('../controllers/userControllers')
const router = express.Router()

//getallbooks
router.get('/',getAllUsers)
//add book
router.post('/',addUser)


module.exports = router