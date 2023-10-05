export default interface trakingIndividualsEntry {
    id: number,
    idIndividual: number,
    idTrakings: number[] | number,
    idCourses: number[] | number | null,
    idUser: number[] | number,
}

export type NonSensitiveInfoIndivudalTraking = Pick<trakingIndividualsEntry, 'id' | 'idUser'>

export type NewEntry = Omit<trakingIndividualsEntry, 'id'>

export type UpdateEntryUser = Pick<trakingIndividualsEntry, 'idUser'>
export type UpdateEntryTraking = Pick<trakingIndividualsEntry, 'idTrakings'>
export type UpdateEntryCourse = Pick<trakingIndividualsEntry, 'idCourses'>