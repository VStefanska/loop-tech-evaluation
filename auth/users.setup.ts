import { resolve } from 'path';
import { readFileSync } from 'fs';

export enum UserRole {
    ADMIN = 'admin'
}

export type User = {
    username: string,
    password: string
}

export function getUser(userRole: UserRole) {
    const usersJson = readFileSync(resolve(__dirname, './users.json'), 'utf8')
    const usersData: Record<UserRole, User> = JSON.parse(usersJson)
    const userData: User = usersData[userRole]
    if (!userData) {
        throw new Error(`User credentials for user role: ${userRole} was not found. Please check users.json file.`)
    }
    return userData;
}