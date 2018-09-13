var mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-api', { useNewUrlParser: true });
var url = process.env.DATABASEURL;
mongoose.connect(url);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");