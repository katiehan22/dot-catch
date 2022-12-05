import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { hideModal } from "../../store/ui";
import Instructions from "./Instructions";

export default function InstructionsModal() {
    const dispatch = useDispatch()

    return(
        <Modal onClose={() => dispatch(hideModal() ) }>
            <Instructions />
        </Modal>
    )
}