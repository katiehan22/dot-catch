import { useState } from 'react';
import SwipeCards from './SwipeCards/SwipeCards';
import ListView from '../../ListView/ListView';
import './SwipeView.css';

const SwipeView = ({ isLoading, setIsLoading }) => {
    const [showListView, setShowListView] = useState(false);

    return (
        <section className='matching-section'>
            <div className='viewing-option-btns'>
                <div className='btns-div'>
                    <button style={!showListView ? {backgroundColor: '#ebebeb'} : {}} onClick={() => setShowListView(false)}>Swipe View</button>
                    <button style={showListView ? {backgroundColor: '#ebebeb'} : {}} onClick={() => setShowListView(true)}>Likes</button>
                </div>
            </div>
            {!showListView &&
                <section className='swipe-view-section'>
                    <SwipeCards isLoading={isLoading} setIsLoading={setIsLoading}/>
                </section>
            }
            {showListView &&
                <ListView />
            }
        </section>
    )
}

export default SwipeView;