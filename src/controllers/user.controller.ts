import { User } from "../models/User.model";
import BaseResponse from "../models/response/model.BaseResponse";
import * as userCredentialsController from './userCredentials.controller';

export const createUser = async (req: any, res: any) => {
    var baseResponse = new BaseResponse();
    if (!req.body) {
        baseResponse.setError('Body request is Required');
        return res.status(401).json(baseResponse.response);
    }
    await User.find({ email: req.body.email, isDeleted: false })
        .then((isEmailExisted: any) => {
            if (isEmailExisted) {
                baseResponse.setError('email đã tồn tại');
                return res.status(404).json(baseResponse.response);
            }
        })
        .catch((err: any) => {
            console.log(err)
        });

    await User.find({ phone: req.body.phone, isDeleted: false })
        .then((isPhoneExisted: any) => {
            if (isPhoneExisted) {
                baseResponse.setError('số điện thoại đã tồn tại');
                return res.status(404).json(baseResponse.response);
            }
        })
        .catch((err: any) => {
            console.log(err)
        });

    var user = new User();
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.birth = req.body.birth;
    user.img = req.body.img ?? '';
    user.address = req.body.address;
    user.gender = req.body.gender ?? 0;
    user.userType = req.body.userType ?? 'User';
    await user.save();

    await User.findOne({ email: user.email, isDeleted: false, phone: user.phone })
        .then((userCreated: any) => {
            res.json(userCreated);
        })
        .catch((err: any) => console.log(err));
    // if (userCreated) {
    //     userCredentialsController.createUserCredentials(userCreated.id, req.body.password);
    // }

}

