import { authTypes } from "../types/authTypes";

export const AuthReducer = (state,action) => {
    switch (action.type) {
        case authTypes.login:
            return {userLogged: true}
        case authTypes.logout:
            return{useLogged:false}
        default:
            return state;
    } ;
};