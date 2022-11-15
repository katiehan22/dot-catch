import { useDispatch } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import { fetchUsers } from '../../store/users';
import './MainPage.css';
import { useEffect } from 'react';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <>
            <MatchesSidebar />
            <SwipeView />
        </>
    )
}

export default MainPage;