import { useDispatch } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import { fetchUsers } from '../../store/users';
import './MainPage.css';
import { useEffect } from 'react';

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <>
            <SwipeView />
        </>
    )
}

export default MainPage;