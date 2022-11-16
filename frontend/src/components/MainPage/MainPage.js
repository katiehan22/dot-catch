import { useDispatch, useSelector } from 'react-redux';
import SwipeView from './SwipeView/SwipeView';
import { fetchUsers } from '../../store/users';
import './MainPage.css';
import { useEffect } from 'react';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import { useState } from 'react';
import Messaging from '../Messaging/Messaging';


const MainPage = () => {
    const dispatch = useDispatch();
    const [showMessages, setShowMessages] = useState(false);

    const [clickedMatchId, setClickedMatchId] = useState('');
    const userMatches = useSelector(state => state.session.user.matches !== {} ? Object.keys(state.session.user.matches) : []);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, userMatches.length])

    

    return (
        <section className='main-page'>
            {!showMessages && 
            <div>
                <MatchesSidebar
                setClickedMatchId={setClickedMatchId}
                setShowMessages={setShowMessages}/>
                <SwipeView/>
            </div>}
            {showMessages &&
            <div className='mainPageMatchesMessagesContainer'>
                <MatchesSidebar
                    setClickedMatchId={setClickedMatchId}
                    setShowMessages={setShowMessages}/>
                <Messaging clickedMatchId={clickedMatchId}/>
            </div>}
        </section>
    )
}

export default MainPage;