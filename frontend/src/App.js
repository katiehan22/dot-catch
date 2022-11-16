import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import SplashPage from './components/SplashPage/SplashPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import MainPage from './components/MainPage/MainPage';

import { getCurrentUser } from './store/session';
import CreateProfileForm from './components/UserProfileForms/CreateProfileForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

        <ProtectedRoute exact path="/profile/:userId" component={UserProfilePage} />
        <ProtectedRoute exact path="/main" component={MainPage} />
        <ProtectedRoute exact path="/createprofile" component={CreateProfileForm} />
      </Switch>
    </>
  );
}

export default App;
