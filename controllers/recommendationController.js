const Movie = require('../models/movies');
const Global = require('../models/global');
const recommendation_index = (req, res) => {
    
    Movie.find().sort({createdAt: -1})
    .then((result) => {
        console.log(req.user);
        res.render('index', {title: ' All Movies', blogs: result, user: Global.user})
    })
    .catch((err) => {
        console.log(err);
    })
}
const recommendation_create_get = (req,res) => {
    res.render('create', {user: Global.user});
}
const recommendation_create_post = (req, res)=>{
    console.log(req.body);
    const recommendation = new Movie(req.body);
    recommendation.save()
    .then((result) => {
    res.redirect('/recommendations');
    })
    .catch((err)=> {
    console.log(err);
    })}


const recommendation_details = (req, res) => {
    const id = req.params.id;
    Movie.findById(id)
    .then(result => {
        res.render('/details', {blog: result, title: 'Blog Details'});
    })
    .catch(err=>{
        res.render('/404', { title: 'Blog not found'});
    })
}
const recommendation_delete = (req, res) => {
    const id = req.params.id;
    Movie.findByIdAndDelete(id)
    .then(result => {
    res.json({redirect: '/recommendations'});
    })
    .catch(err=> {
    console.log(err);
    })
}
module.exports = {
    recommendation_index,
    recommendation_create_post,
    recommendation_create_get,
    recommendation_details,
    recommendation_delete

}