const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()

//getallbooks
router.get('/',getAllBooks)
//get book by id
router.get('/:book._Id',getBookById)
//add book
router.post('/',addBook)
//update book
router.patch('/:book._Id',updateBook)
//delete book
router.delete('/:book._Id',deleteBook)



module.exports = router