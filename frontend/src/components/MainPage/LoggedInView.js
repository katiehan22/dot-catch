import SwipeView from './SwipeView/SwipeView';
import './MainPage.css';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import { useState } from 'react';

export const LoggedInView = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <section className='main-page'>
            <MatchesSidebar setIsLoading={setIsLoading}/>
            <SwipeView isLoading={isLoading} setIsLoading={setIsLoading} />
        </section>
    )
}