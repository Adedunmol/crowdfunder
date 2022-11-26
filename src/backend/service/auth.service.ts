import { PrismaClient } from '@prisma/client'
import Conflict from '../errors/Conflict'
import { registerUserInput } from '../schema/user.schema'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const userExists = async ( email: string ) => {

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (user) return true

    return false
}

export const createUser = async (input: registerUserInput) => {
    if (await userExists(input.email)) throw new Conflict('User with this email already exists')

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(input.password, salt)
    const user = await prisma.user.create({
        data: {
            name: input.name,
            email: input.email,
            password: hashedPwd
        }
    })

    return user
}