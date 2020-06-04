var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all Books.
exports.book_list = function(req, res, next) {

    Book.find({}, 'title author')
      .populate('author')
      .exec(function (err, list_books) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('book_list', { title: 'Book List', book_list: list_books });
      });
      
  };

exports.book_detail = (req, res) => { res.send ('Not implemented: book detail' + req.params.id); } ;

exports.book_create_get = (req, res) => {res.send('Not implemented: Create book GET');};

exports.book_create_post = (req, res) => {res.send('Not implemented: Create book POST');};

exports.book_delete_get = (req, res) => {res.send('Not implemented: Delete book GET');};

exports.book_delete_post = (req, res) => {res.send('Not implemented: Delete book POST');};

exports.book_update_get = (req, res) => {res.send('Not implemented: Update book GET');};

exports.book_update_post = (req, res) => {res.send('Not implemented: Update book POST');};
