import { NewUserEntry, UpdateUserEntry } from '../Interfaces/user.interface'

import parse from './parse.utils'

const toNewUserEntry = (object: any): NewUserEntry => {
    const newEntry: NewUserEntry = {
        name: parse.name(object.name),
        permissions: parse.permissions(object.permissions),
        password: parse.password(object.password),
        credentials: parse.credentials(object.credentials),
        email: parse.email(object.email)
    }
    return newEntry
}

const toUpdatedUserEntry = (object: any): UpdateUserEntry => {
    const updateEntry: UpdateUserEntry = {
        name: parse.name(object.name),
        credentials: parse.credentials(object.credentials),
        permissions: parse.permissions(object.permissions),
        email: parse.email(object.email),
        password: parse.password(object.password)
    }
    return updateEntry
}

export default { toNewUserEntry, toUpdatedUserEntry }