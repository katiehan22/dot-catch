import { useDispatch } from 'react-redux';
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

    // console.log(clickedMatchId)
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <>
            {!showMessages && 
            <div>
                <MatchesSidebar
                setClickedMatchId={setClickedMatchId}
                setShowMessages={setShowMessages}/>
                <SwipeView/>
            </div>}
            {showMessages &&
            <div>
                <MatchesSidebar  />
                <Messaging clickedMatchId={clickedMatchId}/>
            </div>}
        </>
    )
}

export default MainPage;