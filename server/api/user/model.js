import Mongoose, {
    Schema,
} from 'mongoose';																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    DOB: {
        type: String
    }
}, {collection: 'user'});

const userModel = Mongoose.model('User', userSchema);

export default class User {
    constructor() {
        this.model = userModel;
    }
    static get modelName() {
        return userModel.modelName;
    }
}