import { Request, Response } from 'express';
import { registerUserInput } from '../schema/user.schema';
import { createUser } from '../service/auth.service';

export async function registerUserController(req: Request<{}, {}, registerUserInput>, res: Response) {
    try {
        const user = await createUser(req.body);

        return user
    }catch (err: any) {
        return res.send('User can not be created')
    }
}

export async function loginUserController(req: Request, res: Response) {
    
}

export async function logoutUserController(req: Request, res: Response) {
    
}

export async function refreshTokenController(req: Request, res: Response) {
    
}