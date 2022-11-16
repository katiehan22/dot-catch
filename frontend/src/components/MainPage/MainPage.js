import SwipeView from './SwipeView/SwipeView';
import './MainPage.css';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';


const MainPage = () => {

    return (
        <section className='main-page'>
            <div>
                <MatchesSidebar />
                <SwipeView />
            </div>
        </section>
    )
}

export default MainPage;