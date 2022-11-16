import { useDispatch } from "react-redux"
import { Modal } from "../../context/Modal"
import LoginForm from "./LoginForm"
import { hideModal } from "../../store/ui"

export const LoginFormModal = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Modal onClose={() => dispatch(hideModal())}>
                <LoginForm></LoginForm>
            </Modal>
        </>
    )
}