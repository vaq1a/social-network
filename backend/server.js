import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import './core/db.js';
import {UserCtrl} from "./controllers/UserController.js";
import {registerValidations} from "./validations/register.js";
import {passport} from "./core/passport.js";
import {TweetCtrl} from "./controllers/TweetController.js";
import {createTweetValidations} from "./validations/createTweetValidations.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserCtrl.index);
app.post('/auth/registration', registerValidations, UserCtrl.create);
app.get('/auth/verify', UserCtrl.verify);
app.get('/users/me', passport.authenticate('jwt', { session: false }), UserCtrl.getUserProfile);
app.get('/users/:id', UserCtrl.getUser);
app.post('/auth/login', passport.authenticate('local', { session: false }), UserCtrl.afterLogin);

app.get('/tweets', TweetCtrl.index);
app.get('/tweets/:id', TweetCtrl.getTweet);
app.post('/tweets', passport.authenticate('jwt', { session: false }), createTweetValidations, TweetCtrl.create);
app.delete('/tweets/:id', passport.authenticate('jwt', { session: false }), TweetCtrl.delete);
app.put('/tweets/:id', passport.authenticate('jwt', { session: false }), createTweetValidations, TweetCtrl.update);

// app.patch('/users', UserCtrl.upgrade);
// app.delete('/users', UserCtrl.delete);



app.listen(8888, (err) => {
    if(err) {
        throw new Error(err);
    }

    console.log('Server started!');
});