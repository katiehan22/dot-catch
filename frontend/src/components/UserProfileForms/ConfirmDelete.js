import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { hideModal } from '../../store/ui';
import { deleteUser } from "../../store/users";
import { logout } from "../../store/session";

function ConfirmDelete () {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.session.user);

  const handleDelete = () => {
    dispatch(deleteUser(currentUser._id));
    dispatch(logout());
  }

  return (
    <div className="confirm-delete-form">
      <div className="delete-form-top">
        <h2>Are you sure you want to delete your profile?</h2>
        <button className="close" type="button" onClick={() => dispatch(hideModal())}>X</button>
      </div>
      <div className="delete-form-bottom">
        <button className="confirm-delete-buttons" onClick={() => handleDelete()}>Yes, I've found love.</button>
        <button className="confirm-delete-buttons" onClick={() => dispatch(hideModal())}>No, take me back to your app!</button>
      </div>
    </div>
  )
}

export default ConfirmDelete;