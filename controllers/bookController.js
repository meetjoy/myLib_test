const Book = require('../models/book');

exports.index = (req, res) => { res.send('未实现：站点首页'); };

exports.book_list = (req, res) => { res.send('未实现：book 作者列表'); };

exports.book_detail = (req, res) => { res.send ('Not implemented: book detail' + req.params.id); } ;

exports.book_create_get = (req, res) => {res.send('Not implemented: Create book GET');};

exports.book_create_post = (req, res) => {res.send('Not implemented: Create book POST');};

exports.book_delete_get = (req, res) => {res.send('Not implemented: Delete book GET');};

exports.book_delete_post = (req, res) => {res.send('Not implemented: Delete book POST');};

exports.book_update_get = (req, res) => {res.send('Not implemented: Update book GET');};

exports.book_update_post = (req, res) => {res.send('Not implemented: Update book POST');};
