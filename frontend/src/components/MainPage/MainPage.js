import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SplashPage from '../SplashPage/SplashPage';
import { LoggedInView } from './LoggedInView';


const MainPage = () => {
    const curr = useSelector(state => state.session.user)

    return (
        <>
            {curr ? (curr.location ? <LoggedInView /> : <Redirect to={{pathname: '/createprofile', state: { fromApp: true }}}/>) : <SplashPage />}
        </>
    )
}

export default MainPage;