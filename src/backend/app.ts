import express, { Request, Response } from 'express';
import { notFound } from './middlewares/notFound';
import authRouter from './routes/auth.routes';

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.send('Home')
})

app.use('/api/v1/auth', authRouter)

app.use(notFound)

export default app;