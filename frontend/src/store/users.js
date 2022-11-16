import { useSelector } from "react-redux";
import jwtFetch from "./jwt";
import { receiveCurrentUser } from "./session";

const RECEIVE_USERS = 'users/RECEIVE_USERS'
const RECEIVE_USER = 'users/RECEIVE_USER'
const REMOVE_USER = 'users/REMOVE_USER'
const RECEIVE_USER_ERRORS = 'users/RECEIVE_USER_ERRORS'
const CLEAR_USER_ERRORS = 'users/CLEAR_USER_ERRORS'


const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const removeUser = userId => ({
    type: REMOVE_USER,
    userId
})

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const fetchUsers = () => async dispatch => {
    try {
        const res = await jwtFetch('/api/users')
        const users = await res.json()
        dispatch(receiveUsers(users))
    } catch(err) {
        const resBody = await err.json()
        if (resBody.statusCode === 400) {
            dispatch(receiveUserErrors(resBody.errors))
        }
    }
}

export const fetchUser = (userId) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/users/${userId}`) //TODO: double-check route
        const user = await res.json()
        dispatch(receiveUser(user))
    } catch(err) {
        const resBody = await err.json()
        if (resBody.statusCode === 400) {
            dispatch(receiveUserErrors(resBody.errors))
        }
    }
}

export const updateUser = (user) => async dispatch => {
    try{
        const res = await jwtFetch(`/api/users/${user._id}`, { 
            method: 'PATCH',
            body: JSON.stringify(user)
        })
        const updatedUser = await res.json()
        dispatch(receiveUser(updatedUser));
        // const currentUser = useSelector(state => state.session.user);
        // if(currentUser._id === user._id) {
        //     dispatch(receiveCurrentUser(updatedUser))
        // }
    } catch(err) {
        const res = await err.json()
        if (res.statusCode === 400){
            return dispatch(receiveUserErrors(res.errors))
        }
    }
}

export const deleteUser = (userId) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/users/${userId}`, { //TODO: double-check route
            method: 'DELETE'
        })
        if(res.ok){
            dispatch(removeUser(userId))
        }
    } catch (err) {
        const resBody = await err.json()
        if (resBody.statusCode === 400) {
            dispatch(removeUser(userId))
        } 
    }
}

export const uploadPhoto = (userId, file) => async dispatch => {
    try {
        const imageData = new FormData();
        imageData.append("image", file);
        const res = await jwtFetch(`/api/users/${userId}/add-photo`, {
            method: 'POST',
            body: imageData
        })
        const updatedUser = await res.json();
        dispatch(receiveUser(updatedUser));
    } catch (err) {
        console.log(err)
        // const res = await err.json()
        // if (res.statusCode === 400) {
        //     return dispatch(receiveUserErrors(res.errors))
        // }
    }
}

const nullErrors = null
export const userErrorsReducer = (state = nullErrors, action) => {
    switch(action.type){
        case RECEIVE_USER_ERRORS:
            return action.errors
        case CLEAR_USER_ERRORS:
            return nullErrors
        default:
            return state
    }
}

const usersReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_USERS:
            return {...action.users}
        case RECEIVE_USER:
            return {...state, [action.user._id]: action.user}
        case REMOVE_USER:
            const newState = {...state}
            delete newState[action.userId]
            return newState
        default:
            return state
    }
}

export default usersReducer