import {body} from 'express-validator';

export const createTweetValidations = [
    body('text', 'Введите текст')
        .isString()
        .withMessage('Введите текст')
        .isLength({max: 280})
        .withMessage('Макс длина символов 280...')
]