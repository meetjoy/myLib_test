const Bookinstance = require('../models/bookinstance');

exports.bookinstance_list = (req, res) => { res.send('未实现：bookinstance 作者列表'); };

exports.bookinstance_detail = (req, res) => { res.send ('Not implemented: bookinstance detail' + req.params.id); } ;

exports.bookinstance_create_get = (req, res) => {res.send('Not implemented: Create bookinstance GET');};

exports.bookinstance_create_post = (req, res) => {res.send('Not implemented: Create bookinstance POST');};

exports.bookinstance_delete_get = (req, res) => {res.send('Not implemented: Delete bookinstance GET');};

exports.bookinstance_delete_post = (req, res) => {res.send('Not implemented: Delete bookinstance POST');};

exports.bookinstance_update_get = (req, res) => {res.send('Not implemented: Update bookinstance GET');};

exports.bookinstance_update_post = (req, res) => {res.send('Not implemented: Update bookinstance POST');};

