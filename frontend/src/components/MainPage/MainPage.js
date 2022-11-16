import { useSelector } from 'react-redux';
import SplashPage from '../SplashPage/SplashPage';
import { LoggedInView } from './LoggedInView';

const MainPage = () => {
    const curr = useSelector(state => state.session.user)

    return (
        <>
            {curr ? <LoggedInView /> : <SplashPage />}
        </>
    )
}

export default MainPage;