import * as userController from '../controllers/user.controller';
import express from 'express';

const userRoutes = express.Router();

userRoutes.post('/', userController.createUser);




export default userRoutes;