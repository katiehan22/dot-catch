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

    return (
        <section className='main-page'>
            {!showMessages && 
            <>
                <MatchesSidebar
                setClickedMatchId={setClickedMatchId}
                setShowMessages={setShowMessages}/>
                <SwipeView/>
            </>}
            {showMessages &&
            <>
                <MatchesSidebar
                    setClickedMatchId={setClickedMatchId}
                    setShowMessages={setShowMessages}/>
                <Messaging clickedMatchId={clickedMatchId} />
            </>}
        </section>
    )
}

export default MainPage;