const express = require("express")
const router = express.Router()
const userController = require('../controller/user')

router.get('/post-user', userController.postuser)



module.exports = router