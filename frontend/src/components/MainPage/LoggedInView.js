import { useDispatch, useSelector } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import './MainPage.css';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';

export const LoggedInView = () => {
    return (
        <section className='main-page'>
            <MatchesSidebar />
            <SwipeView />
        </section>
    )
}