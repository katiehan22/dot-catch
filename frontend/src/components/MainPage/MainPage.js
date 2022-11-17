import { useSelector } from 'react-redux';
import { LoggedInView } from './LoggedInView';
import SplashPage from '../SplashPage/SplashPage'


const MainPage = () => {
    const curr = useSelector(state => state.session.user)

    return (
        <>
            {curr ? <LoggedInView /> : <SplashPage></SplashPage>}
        </>
    )
}

export default MainPage;