const express = require('express');
const path = require('path');
//init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//home route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title:'Article one',
            author:'Brad',
            body:'this is article one'
        },
        {
            id:2,
            title:'Article one',
            author:'Brad',
            body:'this is article one'
        },
        {
            id:3,
            title:'Article 2',
            author:'as',
            body:'this is article 2'
        },
        {
            id:4,
            title:'Article 3',
            author:'Brad',
            body:'this is article 3'
        }
    ];
    res.render('index' , {
        title:'articles',
        articles: articles
    });
});

//add route
app.get('/articles/add', function(req,res){
    res.render('add_article', {
        title: 'Add Article'
    });
});

//start server
app.listen(3000, function(){
    console.log('started')
});