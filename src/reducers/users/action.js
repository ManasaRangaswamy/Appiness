import { GET_USERS, CHECK_USER, LOGIN_FAILED } from './types';
export const getUsers = () =>{
    return {
        type: GET_USERS
    }
}

export const checkUserCredential = (user, history) => dispatch =>  {
    dispatch({
        type: CHECK_USER
    })
    if(user.email !== 'hruday@gmail.com'){
        dispatch({
            type: LOGIN_FAILED,
            payload: 'No such user exists'
        })
    }else if(user.password !=='hruday123' ){
        dispatch({
            type: LOGIN_FAILED,
            payload: 'Invalid credentials'
        })
    }else{
        history.push('/dashboard')
    }
}
