const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()

//getallbooks
router.get('/',getAllBooks)
//get book by id
router.get('/:bookId',getBookById)
//add book
router.post('/',addBook)
//update book
router.patch('/:bookId',updateBook)
//delete book
router.delete('/:bookId',deleteBook)



module.exports = router