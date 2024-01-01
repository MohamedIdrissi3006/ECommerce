const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require("./models/userModel");
const generateToken = require("./config/generateToken");
passport.use(new GoogleStrategy({
    clientID: '1031936820890-4jgr916nkk5bv0escdr95dd6ucn609id.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    try {
        // Check if the user with this email already exists in the database
        const existingUser = await User.findOne({ email: profile.email });

        if (existingUser) {
            // If the user already exists, return the user object
            const token = generateToken(existingUser._id);
            return done(null, { user: profile, token }); // Return both user and token
        }

        // If the user doesn't exist, create a new user in the database
        const newUser = new User({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.email,
            // You can add other fields as needed
        });

        await newUser.save();

        // Return the newly created user object along with the token
        const token = generateToken(newUser._id);
        return done(null, { user: profile, token });
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser(function(user,done) {
done(null,user)
})
passport.deserializeUser(function(user,done) {
    done(null,user)
    })