const express = require('express')
const {login, verifyLogin} = require('../controllers/authControllers')
const { checkLogin } = register('../middlewares/checkLogin')
const router = express.Router()



router.post('/login',login)

router.get('/verify', checkLogin, verifyLogin)

module.exports = router