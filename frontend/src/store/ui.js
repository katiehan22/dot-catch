const SHOW_LOGIN_MODAL = 'ui/SHOW_LOGIN_MODAL'
const HIDE_MODAL = 'ui/HIDE_MODAL'
const SHOW_SIGNUP_MODAL = 'ui/SHOW_SIGNUP_MODAL'
const SHOW_DELETE_MODAL = "ui/SHOW_DELETE_MODAL"
const SHOW_ABOUTLINKS_MODAL = 'ui/SHOW_ABOUTLINKS_MODAL'
const SHOW_INSTRUCTIONS_MODAL = 'ui/SHOW_INSTRUCTIONS_MODAL'

export const showLoginModal = () => ({
    type: SHOW_LOGIN_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const showSignupModal = () => ({
    type: SHOW_SIGNUP_MODAL
})

export const showDeleteModal = () => ({
    type: SHOW_DELETE_MODAL
})

export const showAboutLinksModal = () => ({
    type: SHOW_ABOUTLINKS_MODAL
})

export const showInstructionsModal = () => ({
    type: SHOW_INSTRUCTIONS_MODAL
})

const uiReducer = (state = {}, action) => {
    switch(action.type){
        case SHOW_LOGIN_MODAL:
            return {modal: 'login'}
        case HIDE_MODAL:
            return {modal: null}
        case SHOW_SIGNUP_MODAL:
            return {modal: 'signup'}
        case SHOW_DELETE_MODAL:
            return {modal: 'delete'}
        case SHOW_ABOUTLINKS_MODAL:
            return {modal: 'aboutlinks'}
        case SHOW_INSTRUCTIONS_MODAL:
            return {modal: 'instructions'}
        default:
            return state
    }
}

export default uiReducer