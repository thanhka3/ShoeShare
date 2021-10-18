import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/index';
import connect from './connect-database/connect';



dotenv.config();
const app = express();
const port = 3000;

connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);


app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
})