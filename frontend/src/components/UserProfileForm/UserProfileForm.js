import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserProfileForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {

  }, [dispatch])

  return (
    <>
    </>
  )
}

export default UserProfileForm;