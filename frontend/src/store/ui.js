const SHOW_LOGIN_MODAL = 'ui/SHOW_LOGIN_MODAL'
const HIDE_MODAL = 'ui/HIDE_MODAL'

export const showLoginModal = () => ({
    type: SHOW_LOGIN_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})

const uiReducer = (state = {}, action) => {
    switch(action.type){
        case SHOW_LOGIN_MODAL:
            return {modal: 'login'}
        case HIDE_MODAL:
            return {modal: null}
        default:
            return state
    }
}

export default uiReducer