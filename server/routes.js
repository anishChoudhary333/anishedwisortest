import userRouter from './api/user/routes';

export default function routes(app) {
    app.use('/user', userRouter);
    return app;
}
