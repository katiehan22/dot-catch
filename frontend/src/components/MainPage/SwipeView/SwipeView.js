import { useState } from 'react';
import SwipeCards from './SwipeCards/SwipeCards';
import ListView from '../../ListView/ListView';
import './SwipeView.css';

const SwipeView = () => {
    const [showListView, setShowListView] = useState(false);

    return (
        <section className='matching-section'>
            <div className='viewing-option-btns'>
                <div className='btns-div'>
                    <button style={!showListView ? {backgroundColor: '#ebebeb'} : {}} onClick={() => setShowListView(false)}>Swipe View</button>
                    <button style={showListView ? {backgroundColor: '#ebebeb'} : {}} onClick={() => setShowListView(true)}>List View</button>
                </div>
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