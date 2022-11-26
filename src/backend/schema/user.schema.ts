import { object, string, TypeOf } from "zod";

export const registerUser = object({
    body: object({
        name: string({ required_error: 'name is required' }),
        email: string({ required_error: 'email is required' }),
        password: string({ required_error: 'password is required' }),
        password_confirmation: string({ required_error: 'password confirmation is required' })
    }).refine((data) => {
        return data.password === data.password_confirmation
    })
})

export type registerUserInput = Omit<TypeOf<typeof registerUser>['body'], 'password_confirmation'>