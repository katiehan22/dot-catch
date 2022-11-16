import { useDispatch, useSelector } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import { fetchUsers } from '../../store/users';
import './MainPage.css';
import { useEffect } from 'react';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import SplashPage from '../SplashPage/SplashPage';

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const user = useSelector(state => state.session.user)

    const whichContent = () => {
        if(user) {
            return (
                <>
                    <MatchesSidebar />
                    <SwipeView />
                </>
            )
        } else {
            return (
                <SplashPage></SplashPage>
            )
        }
    }
    return ( 
        <>
            {whichContent()}
        </>
    )
}

export default MainPage;