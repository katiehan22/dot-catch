const SHOW_LOGIN_MODAL = 'ui/SHOW_LOGIN_MODAL'
const HIDE_MODAL = 'ui/HIDE_MODAL'
const SHOW_SIGNUP_MODAL = 'ui/SHOW_SIGNUP_MODAL'

export const showLoginModal = () => ({
    type: SHOW_LOGIN_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const showSignupModal = () => ({
    type: SHOW_SIGNUP_MODAL
})

const uiReducer = (state = {}, action) => {
    switch(action.type){
        case SHOW_LOGIN_MODAL:
            return {modal: 'login'}
        case HIDE_MODAL:
            return {modal: null}
        case SHOW_SIGNUP_MODAL:
            return {modal: 'signup'}
        default:
            return state
    }
}

export default uiReducer