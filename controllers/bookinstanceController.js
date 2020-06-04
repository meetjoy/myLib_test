const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {

    BookInstance.find()
      .populate('book')
      .exec(function (err, list_bookinstances) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
      });
      
  };

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res, next) {

    BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function (err, bookinstance) {
      if (err) { return next(err); }
      if (bookinstance==null) { // No results.
          var err = new Error('Book copy not found');
          err.status = 404;
          return next(err);
        }
      // Successful, so render.
      res.render('bookinstance_detail', { title: 'Copy: '+bookinstance.book.title, bookinstance:  bookinstance});
    })

};

exports.bookinstance_create_get = (req, res) => {res.send('Not implemented: Create bookinstance GET');};

exports.bookinstance_create_post = (req, res) => {res.send('Not implemented: Create bookinstance POST');};

exports.bookinstance_delete_get = (req, res) => {res.send('Not implemented: Delete bookinstance GET');};

exports.bookinstance_delete_post = (req, res) => {res.send('Not implemented: Delete bookinstance POST');};

exports.bookinstance_update_get = (req, res) => {res.send('Not implemented: Update bookinstance GET');};

exports.bookinstance_update_post = (req, res) => {res.send('Not implemented: Update bookinstance POST');};

