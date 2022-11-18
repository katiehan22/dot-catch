import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { showLoginModal, showSignupModal }  from '../../store/ui';
import { LoginFormModal } from '../SessionForms/LoginFormModal';
import { SignupFormModal } from '../SessionForms/SignupFormModal';
import { ProfileNavButton } from '../ProfileNavButton/ProfileNavButton';
import net from './net.svg'

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
        <ProfileNavButton></ProfileNavButton>
      );
    } else {
      return (
        <div className="links-auth">
          <button className='splash-nav-buttons' onClick={() => dispatch(showLoginModal())}>Login</button>
          <button className='splash-nav-buttons' onClick={() => dispatch(showSignupModal())}>Signup</button>
        </div>
      );
    }
  }

  return (
    <nav className='nav'>
      <Link className='navLogoContainer' to='/'>
        <h1>.catch</h1>
        <img className='logoImg' src={net} alt="net" />
      </Link>
      { getLinks() }
      {modal === 'login' &&(<LoginFormModal></LoginFormModal>)}
      {modal === 'signup' &&(<SignupFormModal></SignupFormModal>)}
    </nav>
  );
}

export default NavBar;
