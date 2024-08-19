require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bookRoutes = require('./routes/bookRoutes')
const authRoutes = require('./routes/authRoutes')
const authorRoutes = require('./routes/authorRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = 3000

app.use(cors({
  credentials:true,
  origin:true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/books',bookRoutes)
app.use('/auth',authRoutes)
app.use('/authors',authorRoutes)
app.use('/users',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main()
.then(() =>console.log("connected"))
.catch(err => console.log(err));