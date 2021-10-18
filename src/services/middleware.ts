import jwt from 'jsonwebtoken';
import BaseResponse from '../models/response/model.BaseResponse';

export const authenticationToken = async (req: any, res: any, next: any) => {
    var baseResponse = new BaseResponse();
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader?.split(' ')[1];
    if (!token) {
        baseResponse.setError("Unauthenticated");
        res.status(401).json(baseResponse.response);
    }
    const check = await jwt.verify(token, process.env.TOKEN_SECRET_KEY ?? '3i1yPHA1ASW3mp52hF1Hi');
    req.author = check;
    next();
}

