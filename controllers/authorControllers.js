const Author = require("../models/authorModel");

const getAllAuthors = async (req, res)=>{
    const authors = await Author.find({});
    res.json(authors)
}

const getAuthorById =async(req, res)=>{
    const authors = await Author.findById(req.params.author._id).exec();
    res.json(authors)
}

const addAuthor = async(req, res)=>{
    //get data from request body
    const data = req.body 
    //create a document using request body 
    const authors = new Author(data)
    //save document to dtbase
    await authors.save()

    res.json(authors)
}

const updateAuthor = (req, res)=>{}

const deleteAuthor =(req, res)=>{}


module.exports={
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
}