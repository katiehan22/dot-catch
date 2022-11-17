<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
>>>>>>> main
import SwipeView from './SwipeView/SwipeView';
import './MainPage.css';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import SplashPage from '../SplashPage/SplashPage';


const MainPage = () => {

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <SwipeView />
        </section>
    )
}

export default MainPage;