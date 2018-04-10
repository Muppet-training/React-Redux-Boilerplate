var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

// APIs

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user_book');

var Books = require('./models/books.js');
var Users = require('./models/users.js');
var Shareholders = require('./models/shareholders.js');
var Single = require('./models/single.js');

//==========>>> POST testform <<<--------------
app.post('/register', function(req, res) {
    var user = req.body;
    Users.create(user, function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

//==========>>> GET Single <<<--------------
app.get('/single', function(req, res) {
    Single.find(function(err, single) {
        if (err) {
            throw err;
        }
        res.json(single);
    });
});

//==========>>> POST Single <<<--------------
app.post('/single', function(req, res) {
    var query = req.body;

    Single.create(query, function(err, single) {
        if (err) {
            throw err;
        }
        res.json(single);
    });
});

//==========>>> DELETE Single <<<--------------
app.delete('/single/:_id', function(req, res) {
    var query = { _id: req.params._id };

    Single.remove(query, function(err, single) {
        if (err) {
            throw err;
        }
        res.json(single);
    });
});

//==========>>> GET Users <<<--------------
app.get('/users', function(req, res) {
    Users.find(function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

//==========>>> POST Users <<<--------------
app.post('/users', function(req, res) {
    var user = req.body;

    Users.create(user, function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

//==========>>> DELETE Users <<<--------------
app.delete('/users/:_id', function(req, res) {
    var query = { _id: req.params._id };

    Users.remove(query, function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

//==========>>> UPDATE Users <<<--------------
app.put('/users/:_id', function(req, res) {
    var user = req.body;
    var query = { _id: req.params._id };
    // if the field doesn't exist $set will set a new field
    var update = {
        $set: {
            first: user.first,
            last: user.last,
            age: user.age,
            description: user.description,
            thumbnail: user.thumbnail
        }
    };
    // When true returns the updated document
    var options = { new: true };
    Users.findOneAndUpdate(query, update, options, function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

//==========>>> GET SHAREHOLDERS <<<--------------
app.get('/shareholders', function(req, res) {
    Shareholders.find(function(err, shareholders) {
        if (err) {
            throw err;
        }
        res.json(shareholders);
    });
});

//==========>>> POST SHAREHOLDERS <<<--------------
app.post('/shareholders', function(req, res) {
    var shareholder = req.body;

    Shareholders.create(shareholder, function(err, shareholders) {
        if (err) {
            throw err;
        }
        res.json(shareholders);
    });
});

//==========>>> DELETE Users <<<--------------
app.delete('/shareholders/:_id', function(req, res) {
    var query = { _id: req.params._id };

    Shareholders.remove(query, function(err, shareholders) {
        if (err) {
            throw err;
        }
        res.json(shareholders);
    });
});

//==========>>> UPDATE Books <<<--------------
app.put('/books/:_id', function(req, res) {
    var book = req.body;
    var query = { _id: req.params._id };
    // If the field doesn't exist $set will set a new field
    var update = {
        $set: {
            title: book.title,
            description: book.description,
            image: book.image,
            price: book.price
        }
    };

    // When true returns the newly updated document!!
    var options = { new: true };

    Books.findOneAndUpdate(query, update, options, function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

//==========>>> GET BOOKS <<<--------------
app.get('/books', function(req, res) {
    Books.find(function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

//==========>>> POST BOOKS <<<--------------
app.post('/books', function(req, res) {
    var book = req.body;

    Books.create(book, function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

//==========>>> DELETE BOOKS <<<--------------
app.delete('/books/:_id', function(req, res) {
    var query = { _id: req.params._id };

    Books.remove(query, function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

// END APIs

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
