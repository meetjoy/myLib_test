const Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res, next) {

    Author.find()
      .populate('author')
      .sort([['family_name', 'ascending']])
      .exec(function (err, list_authors) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors });
      });
  
  };

exports.author_detail = (req, res) => { res.send ('Not implemented: author detail' + req.params.id); } ;

exports.author_create_get = (req, res) => {res.send('Not implemented: Create author GET');};

exports.author_create_post = (req, res) => {res.send('Not implemented: Create author POST');};

exports.author_delete_get = (req, res) => {res.send('Not implemented: Delete author GET');};

exports.author_delete_post = (req, res) => {res.send('Not implemented: Delete author POST');};

exports.author_update_get = (req, res) => {res.send('Not implemented: Update author GET');};

exports.author_update_post = (req, res) => {res.send('Not implemented: Update author POST');};

