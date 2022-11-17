import { useDispatch } from "react-redux"
import ConfirmDelete from "./ConfirmDelete";
import { Modal } from "../../context/Modal"
import { hideModal } from "../../store/ui"

export const ConfirmDeleteModal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal onClose={() => dispatch(hideModal())}>
        <ConfirmDelete></ConfirmDelete>
      </Modal>
    </>
  )
}