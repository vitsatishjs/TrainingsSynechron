const da = require('../data-access');

module.exports.index = function (req, res, next) {
    da.getAllUsers().then((data) => {
        res.render('users/index', { title: 'Users View', users: data });
    }, (eMsg) => {
        console.log(eMsg);
    })
}

module.exports.details = function (req, res, next) {
    da.getUser(req.params.id).then((data) => {
        res.render('users/details', { title: 'User Details View', user: data });
    }, (eMsg) => {
        console.log(eMsg);
    })
}

module.exports.edit_get = function (req, res, next) {
    da.getUser(req.params.id).then((data) => {
        res.render('users/edit', { title: 'Edit User View', user: data, message: "" });
    }, (eMsg) => {
        res.render('users/edit', { title: 'Edit User View', user: null, message: eMsg });
    })
}

module.exports.edit_post = function (req, res, next) {
    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.updateUser(req.params.id, user).then((data) => {
        res.redirect('/users');
    }, (eMsg) => {
        res.render('users/edit', { title: 'Edit User View', user: user, message: eMsg });
    })
}

module.exports.create_get = function (req, res, next) {
    res.render('users/create', { title: 'Create User View', message: "" });
}

module.exports.create_post = function (req, res, next) {
    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.insertUser(user).then((data) => {
        res.redirect('/users');
    }, (eMsg) => {
        res.render('users/create', { title: 'Create UserView', message: eMsg });
    })
}

module.exports.delete_get = function (req, res, next) {
    da.getUser(req.params.id).then((data) => {
        res.render('users/delete', { title: 'Delete User View', user: data, message: "" });
    }, (eMsg) => {
        res.render('users/delete', { title: 'Delete User View', user: null, message: eMsg });
    })
}

module.exports.delete_post = function (req, res, next) {
    da.deleteUser(req.params.id).then(() => {
        res.redirect('/users');
    }, (eMsg) => {
        res.render('users/delete', { title: 'Delete User View', user: null, message: eMsg });
    })
}