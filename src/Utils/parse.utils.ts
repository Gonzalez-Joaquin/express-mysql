import { Permissions } from "../Interfaces/user.interface"

import type from './types.utils'

const name = (nameFromRequest: any): string => {
    if (!type.isString(nameFromRequest)) {
        throw new Error('Incorrect or missing Name')
    }
    return nameFromRequest
}

const password = (passwordFromRequest: any): string => {
    if (!type.isString(passwordFromRequest)) {
        throw new Error('Incorrect or missing Password')
    }
    return passwordFromRequest
}

const permissions = (permissionsFromRequest: any): Permissions => {
    if (!type.isString(permissionsFromRequest) || !type.isPermissions(permissionsFromRequest)) {
        throw new Error('Incorrect or missing Permissions')
    }
    return permissionsFromRequest
}

const credentials = (credentialFromRequest: any): number => {
    if (!type.isNumber(credentialFromRequest)) {
        throw new Error('Incorrect or missing Credentials')
    }

    return credentialFromRequest
}

const email = (emailFromRequest: any): string => {
    if (!type.isString) {
        throw new Error('Incorrect or missing Email')
    }
    return emailFromRequest
}

const date = (dateFromRequest: any, value: string): string => {
    if (!type.isString(dateFromRequest)) {
        throw new Error(`Incorrect or missing ${value}`)
    }
    return dateFromRequest
}

const trueOrFalse = (trueOrFalseFromRequest: any, value: string): boolean => {
    if (!type.isBoolean(trueOrFalseFromRequest)) {
        throw new Error(`Incorrect or missing ${value}`)
    }
    return trueOrFalseFromRequest
}

export default { name, password, permissions, credentials, email, date, trueOrFalse }