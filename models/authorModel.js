// const mongoose = require('mongoose');


// const authorSchema = new mongoose.Schema({
//   authorpht: String,
//   authorname: String,
//   details: String
//   });

//   const Author = mongoose.model('Author', authorSchema);

//   module.exports = Author

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  authorpht: String,
  authorname: String,
  details: String
});

const Author = mongoose.model('Author', authorSchema);

  module.exports = Author


  