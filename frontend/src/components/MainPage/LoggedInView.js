import { useDispatch, useSelector } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import { fetchUsers } from '../../store/users';
import './MainPage.css';
import { useEffect } from 'react';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';

export const LoggedInView = () => {
    const dispatch = useDispatch();    

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <SwipeView />
        </section>
    )
}