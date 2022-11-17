import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import MainPage from './components/MainPage/MainPage';

import { getCurrentUser } from './store/session';
import CreateProfileForm from './components/UserProfileForms/CreateProfileForm';
import MessagesPage from './components/Messaging/MessagesPage';

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
        <Route exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

        <ProtectedRoute exact path="/profile/:userId" component={UserProfilePage} />
        <ProtectedRoute exact path="/createprofile" component={CreateProfileForm} />
        <ProtectedRoute exact path="/messages" component={MessagesPage} />
      </Switch>
    </>
  );
}

export default App;
