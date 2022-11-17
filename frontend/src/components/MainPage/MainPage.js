import SwipeView from './SwipeView/SwipeView';
import './MainPage.css';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';


const MainPage = () => {

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <SwipeView />
        </section>
    )
}

export default MainPage;