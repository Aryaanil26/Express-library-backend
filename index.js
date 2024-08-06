require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes')
const authRoutes = require('./routes/authRoutes')
const authorRoutes = require('./routes/authorRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/books',bookRoutes)
app.use('/auth',authRoutes)
app.use('/authors',authorRoutes)
app.use('/users',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



main().then(() =>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://aryakanil26:sx6G6flNOAL4fOG0@cluster0.39jfwq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}