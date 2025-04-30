import express from 'express'
import { PORT } from './config.js';
import useRoutes from './routes/users.routes.js'
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:4200' })); 
app.use(express.json())
app.use(useRoutes)

app.listen(PORT);
console.log('CORRIENDO POR EL PUERTO: ', PORT);

