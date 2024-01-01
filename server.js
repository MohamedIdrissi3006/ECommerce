const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const passport = require('passport');
const session = require('express-session');
// const auth = 
require('./auth');
dotenv.config();
connectDB();



const app = express();
app.use(express.json()); 
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Auth JWT
app.use("/api/user", userRoutes);

// AUTH GOOGLE Passport
app.get('/', (req, res) => {
    res.send('<a href="/api/user/auth/google">Authenticate with Google</a>');
  });
  
  app.get('/api/user/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  app.get('/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    })
  )
  // app.get('/.', isLoggedIn, (req, res) => {
  //   res.send(`Hello ${req.user.displayName}`);
  // });
  app.get('/protected', isLoggedIn,(req, res) => {
    const responseData = {
      user: req.user.displayName,
      message: `Hello ${req.user.displayName}`
  };

  res.json(responseData);

  });
  // app.get('/logout', (req, res) => {
  //   req.logout();
  //   req.session.destroy();
  //   res.send('Goodbye!');
  // });
  app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      req.session.destroy((err) => {
        if (err) {
          return next(err);
        }
        res.send('Goodbye!');
      });
    });
  });
  
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  
app.listen(5000,console.log("Server running on port 5000"))