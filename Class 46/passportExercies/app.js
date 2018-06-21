const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('./db');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

passport.use(new Strategy(
  //  protocol for exchange of information with the passport db, allowing for an authentication tolken
  (username, password, cb)=>{
    db.users.findByUsername(username, function(err, user){
      // custom function for querying database and finding credentials
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      // error handlers ^^
      if (user.password != password) { return cb(null, false) }
      return cb(null, user);
    });
  }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  // give user a sID which acts as authorization tolken and links with user id, which acts as a foreign key to the database
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  // use the sID to find the user and their data, runs async outside of gets and posts, always runs when you need it?
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});



app.get('/',(req,res)=>{
    res.render('home');
  });


app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  // Parameter of post call ^^
  // by default searches for username and password parameters of post
  (req,res)=>{

    res.redirect('/profile')

  });

app.get('/sign-in',(req,res)=>{
  return res.render('sign-in');
})

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res) {
    if (req.user.admin) {
      res.render('profile-admin', {user:req.user});
    }
    res.render('profile', {user:req.user});
  });

app.listen(8080,function () {
    console.log('Passport');
  });
