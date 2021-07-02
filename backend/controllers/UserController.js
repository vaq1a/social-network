import jwt from 'jsonwebtoken';
import {UserModel} from "../models/UserModel.js";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash.js";
import {sendMail} from "../utils/sendMail.js";
import {isValidObjectId} from "../utils/isValidObjectId.js";

class UserController {
    async index(req, res) {
        try {
            const users = await UserModel.find({}).exec();

            res.json({
               status: 'success',
               data: users
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ status: 'error', errors: errors.array() });
            }

            const data = {
                email: req.body.email,
                fullname: req.body.fullname,
                username: req.body.username,
                password: generateMD5(req.body.password + process.env.SECRET_KEY),
                confirmedHash: generateMD5(process.env.SECRET_KEY + Math.random().toString()),
                confirmed: false,
            }

            const user = await UserModel.create(data);

            res.json({
                status: 'success',
                data: user,

            });

            sendMail({
                fromMail: 'admin@mail.ru',
                toMail: data.email,
                subject: 'Hello with social media',
                html: `<b>Hello! It is verify your account!</b><a href="http://localhost:8888/auth/verify?hash=${data.confirmedHash}">Confirm</a>`

            });

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async verify(req, res) {
        try {
            const hash = req.query.hash;

            if(!hash) {
                res.status(500).json({
                    status: 'error',
                    message: 'Неверная ссылка, не указан hash',
                });
                return;
            }

            const user = await UserModel.findOne({confirmedHash: hash});

            if(user) {
                user.confirmed = true;
                user.save();

                res.json({
                    message: 'success',
                    data: user
                });
            } else {
                res.status(404).json({
                    status: 'error',
                    message: 'Пользователь не найден'
                });
            }

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async getUser(req, res) {
      try {
          const {id} = req.params;

          if(!isValidObjectId(id)) {
              res.status(400).json();
              return;
          }

          const user = await UserModel.findById(id);

          if(!user) {
              res.status(404).send();
              return;
          }

          res.json(user);
      } catch (error) {
          res.status(500).json({
              status: 'error',
              message: error
          });
          return;
      }
    }

    async getUserProfile(req, res) {
        try {
            const user = req.user ? req.user.toJSON() : undefined;

            res.json({
               status: "success",
               data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }

    async afterLogin(req, res) {
        try {

            const user = req.user ? req.user.toJSON() : undefined;

            res.json({
                status: "success",
                data: {
                    ...user,
                    token: jwt.sign({data: req.user}, process.env.SECRET_KEY, {expiresIn: '30 days'})
                },
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
            return;
        }
    }
}

export const UserCtrl = new UserController();