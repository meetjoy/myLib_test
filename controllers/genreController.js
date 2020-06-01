const Genre = require('../models/genre');

exports.genre_list = (req, res) => { res.send('未实现：genre 作者列表'); };

exports.genre_detail = (req, res) => { res.send ('Not implemented: genre detail' + req.params.id); } ;

exports.genre_create_get = (req, res) => {res.send('Not implemented: Create genre GET');};

exports.genre_create_post = (req, res) => {res.send('Not implemented: Create genre POST');};

exports.genre_delete_get = (req, res) => {res.send('Not implemented: Delete genre GET');};

exports.genre_delete_post = (req, res) => {res.send('Not implemented: Delete genre POST');};

exports.genre_update_get = (req, res) => {res.send('Not implemented: Update genre GET');};

exports.genre_update_post = (req, res) => {res.send('Not implemented: Update genre POST');};

