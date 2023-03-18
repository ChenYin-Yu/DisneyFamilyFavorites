var Global = require('./models/global');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const accountInfo = require('./account_info');
const recommendationRouter = require('./routers/recommendationRouters');

// express app
const app = express();

//connect to mongo db
const dbURI = accountInfo.dbURI;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware & static('public')
app.use(express.static('public'));
app.use((express.urlencoded({extended: true})));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.render('login');
})

app.post('/home', (req, res) => {
    console.log("Hello! " + req.body.user);
    Global.user = req.body.user;
    res.redirect('/recommendations');
})

app.get('/about', (req, res) => {
    res.render('about', {user: Global.user});
})

app.use('/recommendations',recommendationRouter);
app.use((req, res) => {
    res.status(404).render('404');
})
