import { AUTH, LOGOUT } from "../constants/constants"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state={},action)=>{
    switch(action.type){
        case AUTH :
             localStorage.setItem('profile',JSON.stringify({...action?.payload}))
            return action?.payload
        case LOGOUT :
            localStorage.clear()
            return action?.payload
        default :
            return state
    }
}