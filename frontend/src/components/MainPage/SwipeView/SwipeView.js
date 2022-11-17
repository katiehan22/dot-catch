import { useState } from 'react';
import SwipeCards from './SwipeCards/SwipeCards';
import ListView from '../../ListView/ListView';
import './SwipeView.css';

const SwipeView = () => {
    const [showListView, setShowListView] = useState(false);

    return (
        <section className='matching-section'>
            <div className='viewing-option-btns'>
                <button onClick={() => setShowListView(false)}>Swipe</button>
                <button onClick={() => setShowListView(true)}>List</button>
            </div>
            {!showListView &&
                <section className='swipe-view-section'>
                    <SwipeCards />
                </section>
            }
            {showListView &&
                <ListView />
            }
        </section>
    )
}

export default SwipeView;