import { NewUserEntry, NonSensitiveInfoUser, userEntry, UpdateUserEntry, LoginEntryData, LoginEntry, InfoAdmin } from '../Interfaces/user.interface'

import usersData from '../Public/user.data.json'

const allUsers: Array<userEntry> = usersData as Array<userEntry>

const getEntries = (): Array<userEntry> => allUsers

const getEntriesWithoutSensitiveInfo = (): Array<InfoAdmin> => {
    return allUsers.map(({ id, name, permissions, credentials, email }) => {
        return { id, name, permissions, credentials, email }
    })
}

const findById = (id: number): NonSensitiveInfoUser | undefined => {
    const user = allUsers.find(user => user.id === id)
    if (user !== undefined) {
        const { credentials, email, password, ...restUserData } = user
        return restUserData
    }
    return user
}

const addUser = (newUserEntry: NewUserEntry): userEntry => {
    const newUser = {
        id: Math.max(...allUsers.map(user => user.id)) + 1,
        ...newUserEntry
    }
    allUsers.push(newUser)
    return newUser
}

const deleteUser = (id: number): userEntry | undefined => {
    const user = allUsers.find(user => user.id === id)
    if (user !== undefined) {
        allUsers.filter(user => user.id !== id)
        return user
    }
    return user
}

const updateUser = (updatedUser: UpdateUserEntry, id: number): Array<userEntry> => {
    allUsers.map(user => {
        if (user.id === id) {
            return ({ id, ...updatedUser })
        }
        return user
    })
    return allUsers
}

const loginUser = (loginData: LoginEntryData): LoginEntry => {
    const user = allUsers.find(user => user.email === loginData.email)

    if (user !== undefined) {
        if (user.password === loginData.password) {
            const { password, ...updatedUser } = user
            return updatedUser
        }
        throw new Error('Invalid or missing email or password.')
    }
    throw new Error('Invalid or missing email or password.')
}

export default { getEntries, getEntriesWithoutSensitiveInfo, findById, addUser, updateUser, deleteUser, loginUser }