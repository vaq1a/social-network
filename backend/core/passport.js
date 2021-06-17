import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import pkg from 'passport-jwt';
import {UserModel} from "../models/UserModel.js";
import {generateMD5} from "../utils/generateHash.js";

const {Strategy: JWTstrategy, ExtractJwt} = pkg;

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await UserModel.findOne({$or: [{ email: username }, {username}]}, function (err, user) {
            if(!user) {
                return done(null, false);
            }

            if(user.password === generateMD5(password + process.env.SECRET_KEY)) {
                return done(null, user);
            } else {
                return done(null, false);
            }

        });
    } catch (err) {
        if (err) { return done(err); }
    }
}));

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEY,
            jwtFromRequest: ExtractJwt.fromHeader('token')
        },
        async (payload, done) => {
            try {
                const user = await UserModel.findById(payload.data._id);

                if(user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (error) {
                done(error, false);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
        done(err, user);
    });
});

export {passport};