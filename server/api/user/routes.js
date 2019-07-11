import Express from 'express';
import controller from './controller';

export default Express
    .Router()
    .post('/signup', controller.signup)
    .post('/login', controller.login)