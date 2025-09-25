import { IUser } from "@/models/IUser";
import { UnknownAction } from "redux";

export enum eUser {
    USER_INFO='USER_INFO'
}

export interface IUserAction extends UnknownAction {
    type: eUser,
    payload: IUser
}

export const userReducer = (state: IUser = defultUser, action: IUserAction) => {
    switch (action.type) {
        case eUser.USER_INFO:
            return action.payload
        default:
            return state
    }
}

const defultUser: IUser = {
    meta: {
        status: 0,
        message: ""
    },
    data: {
        access_token: "",
        token_type: "",
        expires_in: 0,
        user: {
            id: 0,
            name: "",
            email: "",
            role: "",
            remember_token: undefined,
            created_at: "",
            updated_at: ""
        }
    }
}