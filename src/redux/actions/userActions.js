import {AUTH, LOGOUT} from '../constants/constants'
import * as api from '../../api/api'

export const signUp = (userData)=> async(dispatch)=>{
    try {
        const {data} = await api.signUp(userData)
        if(data.message){
            return data.message
        }
        else{
            dispatch({type:AUTH,payload:data})
            return 'successfully signed up'
        }
    } catch (error) {
        console.log(error);
    }
}


export const signIn = (userData)=> async(dispatch)=>{
    try {
        const {data} = await api.signIn(userData)
        if(data.message){
            return data.message
        }
        else{
            dispatch({type:AUTH,payload:data})
            return 'successfully signed in'
        }
    } catch (error) {
        console.log(error);
    }
}


export const logout = (navigate) => async(dispatch)=>{
    try {
        dispatch({type:LOGOUT,payload:null})
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}