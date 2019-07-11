import jwt from 'jsonwebtoken'
import User from './model'

let _user= new User();
export class UserController {

    signup(request, response) {
        let {body}= request;
        let {name, email, password, mobile, DOB}= body
        if(!name) {
            return response.json('name is missing!')
        }
        if(!email) {
            return response.json('email is missing!')
        }
        if(!password) {
            return response.json('password is missing!')
        }
        if(!mobile) {
            return response.json('mobile is missing!')
        }
        if(!DOB) {
            return response.json('DOB is missing!')
        }
        let obj= {
            name,
            email,
            password,
            mobile,
            DOB
        }

        _user.model.insertMany(obj, (err, data)=> {
            if(err) {
                response.json(error);
            } else {
                response.json('User registered successfully!');
            }
        })
    }

    login(request, response) {
        let {body}= request;
        let {email, password}= body

        if(!email) {
            return response.json('email is missing!')
        }
        if(!password) {
            return response.json('password is missing!')
        }
        let obj= {
            email,
            password
        }
        _user.model.findOne(obj, (err, data)=> {
            if(err) {
                response.json('Invalid credentials!');
            } else if(data) {
                jwt.sign({ email }, 'abcdEDIOFJOSDFSJFOx334xer', { algorithm: 'HS256' }, function(err, token) {
                    if(token) {
                        let obj= {token}
                        let userObj= Object.assign({}, obj, JSON.parse(JSON.stringify(data)));
                        return response.json(userObj);
                    }
                });
            } else {
                return response.json('No user found!');
            }
        })
    }
}

export default new UserController();