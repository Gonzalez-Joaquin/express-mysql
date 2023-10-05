export default interface trakingIndividualsEntry {
    id: number,
    idIndividual: number,
    idTrakings: number[] | number,
    idCourses: number[] | number | null,
    idUser: number[] | number,
}

export type NonSensitiveInfoCourse = Pick<trakingIndividualsEntry, 'id' | 'idUser'>

export type NewEntry = Omit<trakingIndividualsEntry, 'id'>

export type UpdateEntryUser = Pick<trakingIndividualsEntry, 'id' | 'idUser'>
export type UpdateEntryTraking = Pick<trakingIndividualsEntry, 'id' | 'idTrakings'>
export type UpdateEntryCourse = Pick<trakingIndividualsEntry, 'id' | 'idCourses'>