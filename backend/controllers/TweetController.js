import {TweetModel} from "../models/TweetModel.js";
import {isValidObjectId} from "../utils/isValidObjectId.js";
import {validationResult} from "express-validator";

class TweetController {
    async index(req, res) {
        try {
            const tweets = await TweetModel.find({}).populate('user').sort({'createdAt': '-1'});

            res.json({
                status: 'success',
                message: tweets
            })
        } catch (error) {
            res.json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async create(req, res) {
        try {
            const user = req.user;

            if(user._id) {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(400).json({ status: 'error', errors: errors.array() });
                }

                const data = {
                    text: req.body.text,
                    user: user
                }

                const tweet = await TweetModel.create(data);

                res.json({
                    status: 'success',
                    message: tweet
                });
            }
        } catch (error) {
            res.json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;

            if(!isValidObjectId(id)) {
                res.json({
                    status: 'error',
                    message: 'Id не указан'
                });
                return;
            }

            const tweet = await TweetModel.findById(id);

            if(tweet) {
                if(String(tweet.user._id) === String(req.user._id)) {
                    tweet.remove();
                    res.json({
                        status: 'success',
                        message: tweet
                    });
                    return;
                } else {
                    res.status(403).send();
                    return;
                }
            }

            if(!tweet) {
                res.status(404).send();
                return;
            }
        } catch (error) {
            res.json({
               status: 'error',
               message: error
            });
            return;
        }
    }

    async getTweet(req, res) {
        try {
            const {id} = req.params;

            if(!isValidObjectId(id)) {
                res.status(400).send();
                return;
            }

            const tweet = await TweetModel.findById(id).populate('user');

            if(!tweet) {
                res.status(404).send();
                return;
            }

            res.json({
                status: 'success',
                message: tweet
            });

        } catch (error) {
            res.json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async update(req, res) {
        try {
            const user = req.user;

            if(user) {
                const {id} = req.params;

                if(id) {
                    const tweet = await TweetModel.findByIdAndUpdate(id, req.body , {new: true});

                    if(tweet) {
                        if (String(tweet.user) === String(req.user._id)) {
                            tweet.text = req.body.text;
                            tweet.save();
                            return res.json({
                                status: 'success',
                                tweet: tweet
                            });
                        }
                    }
                } else {
                    res.status(404).json({
                        status: 'error',
                        message: 'твит не найден'
                    });
                    return;
                }
            } else {
                res.status(401).json({
                    status: 'error',
                    message: 'не авторизован'
                });
                return;
            }



        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }
}

export const TweetCtrl = new TweetController();