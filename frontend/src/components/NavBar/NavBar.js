import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { showLoginModal }  from '../../store/ui'
import { LoginFormModal } from '../SessionForms/LoginFormModal';

function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const modal = useSelector(state => state.ui.modal)
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  }


  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link to={'/profile'}>Profile</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link to={'/signup'}>Signup</Link>
          <button onClick={() => dispatch(showLoginModal())}>Login</button>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <>
      <h1>Chirper</h1>
      { getLinks() }
      <LoginFormModal></LoginFormModal>
    </>
  );
}

export default NavBar;
