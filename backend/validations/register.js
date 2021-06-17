import {body} from 'express-validator';

export const registerValidations = [
    body('email', 'Введите email')
        .isEmail()
        .withMessage('Неверный email')
        .isLength({
            min: 10,
            max: 40,

        })
        .withMessage('Кол-во символов от 10 до 40'),
    body('fullname', 'Введите имя')
        .isString()

        .isLength({
            min: 2,
            max: 40,

        })
        .withMessage('Кол-во символов от 2 до 40'),
    body('username', 'Введите логин')
        .isString()
        .isLength({
            min: 2,
            max: 40,

        })
        .withMessage('Кол-во символов от 2 до 40'),
    body('password', 'Введите пароль')
        .isString()
        .isLength({
            min: 6,

        })
        .withMessage('Мин кол-во символов от 6')
        .custom((value, {req}) => {
            if(value !== req.body.password2) {
                throw new Error('Пароли не совпадают');
            } else {
                return value;
            }
        }),
];