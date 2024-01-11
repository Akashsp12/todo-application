const express = require('express')
const app = express()

const mongoose = require('./config/mongodb')
// var cors = require('cors')


const userRoute = require('./midddleWare/userRoute')



app.use('', userRoute)


app.listen(5000, () => {
    console.log("app is running")
})