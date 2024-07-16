const Book = require("../models/bookModel");

const getAllBooks = async(req, res)=>{
    const books = await Book.find({});
    res.json(books)
}

const getBookById =async(req, res)=>{
    const books = await Book.findById(req.params.bookId).exec();
    res.json(books)
}

const addBook = async(req, res)=>{
    //get data from request body
    const data = req.body 
    //create a document using request body 
    const books = new Book(data)
    //save document to dtbase
    await books.save()

    res.json(books)
}

const updateBook = (req, res)=>{
    res.send("helloworld")
}

const deleteBook = async (req, res)=>{
    await Book.findByIdAndDelete(req.params.bookId)
    res.send("deleted")
}

module.exports={
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}