import { NewUserEntry, UpdateUserEntry, LoginEntryData } from '../Interfaces/user.interface'

import parse from './parse.utils'

const toNewUserEntry = (object: any): NewUserEntry => {
    const newEntry: NewUserEntry = {
        name: parse.string(object.name, 'name'),
        permissions: parse.permissions(object.permissions),
        password: parse.string(object.password, 'password'),
        credentials: parse.number(object.credentials, 'credentials'),
        email: parse.string(object.email, 'email')
    }
    return newEntry
}

const toUpdatedUserEntry = (object: any): UpdateUserEntry => {
    const updateEntry: UpdateUserEntry = {
        name: parse.string(object.name, 'name'),
        credentials: parse.number(object.credentials, 'credentials'),
        permissions: parse.permissions(object.permissions),
        email: parse.string(object.email, 'email'),
        password: parse.string(object.password, 'email')
    }
    return updateEntry
}

const updateLoginUserData = (object: any): LoginEntryData => {
    const updateLoginEntryData: LoginEntryData = {
        email: parse.string(object.email, 'email'),
        password: parse.string(object.password, 'password')
    }
    return updateLoginEntryData
}

export default { toNewUserEntry, toUpdatedUserEntry, updateLoginUserData }