const express = require('express')
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()

//getallbooks
router.get('/',getAllAuthors)
//get author by id
router.get('/:authorId',getAuthorById)
//add author
router.post('/',addAuthor)
//update author
router.patch('/:authorId',updateAuthor)
//delete author
router.delete('/:authorId',deleteAuthor)


module.exports = router