const monk = require('monk');
var db = monk('localhost/appdb');
const collection = db.get('usercollection');

module.exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
        collection.find({}).then((data) => {
            resolve(data);
        }, (err) => {
            reject("Some Error, contact DAL developer");
        })
    });
}

module.exports.getUser = function (id) {
    return new Promise((resolve, reject) => {
        collection.findOne({ _id: monk.id(id) }).then((data) => {
            resolve(data);
        }, (err) => {
            reject("Some Error, contact DAL developer");
        })
    });
}

module.exports.updateUser = function (id, user) {
    return new Promise((resolve, reject) => {
        collection.findOneAndUpdate({ _id: monk.id(id) }, { $set: user }).then((data) => {
            resolve(data);
        }, (err) => {
            reject("Some Error, contact DAL developer");
        })
    });
}

module.exports.insertUser = function (user) {
    return new Promise((resolve, reject) => {
        collection.insert(user).then((data) => {
            resolve(data);
        }, (err) => {
            // Log the Actual Error 
            reject("Some Error, Contact DAL Developer");
        });
    });
}

module.exports.deleteUser = function (id) {
    return new Promise((resolve, reject) => {
        collection.findOneAndDelete({ _id: monk.id(id) }).then(function (data) {
            resolve();
        }, function (err) {
            console.log(err);
            reject("Some Error, Contact DAL Developer.");
        })
    });
}