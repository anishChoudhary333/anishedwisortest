import Express from 'express';
import Mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import cors from 'cors';
const app = new Express();



class ExpressServer {
    constructor() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true,
        }));

        app.use(cors());
    }
    router(routes) {
        routes(app);
        return this;
    }


    configureDb(dbUrl) {
        return new Promise((resolve, reject) => {
            Mongoose.connect(dbUrl, err => {
                if (err) {
                    console.log(`Error in mongodb connection ${err.message}`);
                    return reject(err);
                }
                console.log('Mongodb connection established');
                return resolve(this);
            });
        });
    }

    listen(port) {
        http.createServer(app).listen(port, () => {
            console.log(`secure app is listening @port ${port}`);
        });
        return app;
    }
}

export default ExpressServer;
