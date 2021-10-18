import express from 'express';
import jwt from 'jsonwebtoken';
import { authenticationToken } from '../services/middleware';
import userRoutes from './user.route';
const routes = (app: any) => {
    app.get('/', authenticationToken, (req: any, res: any) => {
        res.send(req.author);
    });
    app.post('/', async (req: any, res: any) => {
        const accessToken = await jwt.sign(req.body, process.env.TOKEN_SECRET_KEY ?? '3i1yPHA1ASW3mp52hF1Hi', { expiresIn: '7000s' });
        res.send({ accessToken });
    });

    app.get('/merchants/:merchantId/branches/:branchId', async (req: any, res: any) => {
        console.log(req.params.merchantId, req.params.branchId);
        res.send('ok');
    });

    app.use('/api/users', userRoutes);

}

export default routes;