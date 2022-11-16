import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import SplashPage from './components/SplashPage/SplashPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import Profile from './components/Profile/Profile';
import MainPage from './components/MainPage/MainPage';

import { getCurrentUser } from './store/session';
import MatchesSidebar from './components/MatchesSidebar/MatchesSidebar';
import Messaging from './components/Messaging/Messaging';

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

        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/main" component={MainPage} />
        <ProtectedRoute exact path="/matched/:matchedUserId">
          <MatchesSidebar />
          <Messaging />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
