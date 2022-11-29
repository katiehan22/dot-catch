import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { hideModal } from "../../store/ui";
import AboutLinks from "./AboutLinks";

export default function AboutLinksModal() {
    const dispatch = useDispatch()

    return(
        <Modal onClose={() => dispatch(hideModal() ) }>
            <AboutLinks />
        </Modal>
    )
}