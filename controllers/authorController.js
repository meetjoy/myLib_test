const Author = require('../models/author');

exports.author_list = (req, res) => { res.send('未实现：author 作者列表'); };

exports.author_detail = (req, res) => { res.send ('Not implemented: author detail' + req.params.id); } ;

exports.author_create_get = (req, res) => {res.send('Not implemented: Create author GET');};

exports.author_create_post = (req, res) => {res.send('Not implemented: Create author POST');};

exports.author_delete_get = (req, res) => {res.send('Not implemented: Delete author GET');};

exports.author_delete_post = (req, res) => {res.send('Not implemented: Delete author POST');};

exports.author_update_get = (req, res) => {res.send('Not implemented: Update author GET');};

exports.author_update_post = (req, res) => {res.send('Not implemented: Update author POST');};

