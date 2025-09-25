import { UnknownAction } from "redux"

export enum eLikes {
    LIKES_LIST='LIKES_LIST'
}

export interface ILikesAction extends UnknownAction {
    type: eLikes,
    payload: number[]
}

export const likesReducer = (state: number[] = [], action: ILikesAction) => {
    switch (action.type) {
        case eLikes.LIKES_LIST:
            return action.payload
        default:
            return state
    }
}