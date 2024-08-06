const express = require('express')
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()

//getallbooks
router.get('/',getAllAuthors)
//get author by id
router.get('/:author._id',getAuthorById)
//add author
router.post('/',addAuthor)
//update author
router.patch('/:author._id',updateAuthor)
//delete author
router.delete('/:author._id',deleteAuthor)


module.exports = router