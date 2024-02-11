const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const passport = require('passport');
const session = require('express-session');
const coockiesSessions = require('cookie-session');
const cors = require('cors');
// const auth = 
require('./auth');
dotenv.config();
connectDB();





const app = express();
app.use(express.json());


// app.use(
// 	coockiesSessions({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );

app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  }
))



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
  passport.authenticate('google', { scope: ['email', 'profile'] }
  ));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/auth/google/failure'
  })
)


app.get('/api/user/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json(
      {
        error: false,
        message: "Succefully logged in",
        user: req.user,
      }
    )
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }


});


app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});




app.get('/api/user/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('http://localhost:3000');
    });
  });
});
app.listen(5000, console.log("Server running on port 5000"))


// app.use(express.json());
// function isLoggedIn(req, res, next) {
//   req.user ? next() : res.sendStatus(401);
// }
// app.get('/.', isLoggedIn, (req, res) => {
//   res.send(`Hello ${req.user.displayName}`);
// });
// app.get('/protected', isLoggedIn, (req, res) => {
//   if (req.user) {
//     res.status(200).json(
//       {
//         error: false,
//         message: "Succefully logged in",
//         user: req.user,
//       }
//     )
//   } else {
//     res.status(403).json({ error: true, message: "Not Authorized" });
//   }
// });
// app.get('/logout', (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.send('Goodbye!');
// });
