import { useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';

const SwipeCards = () => {
    const users = useSelector(state => state.users ? Object.values(state.users) : []);
    const currentUserId = useSelector(state => state.session.user ? state.session.user._id : null);
 
    const swiped = (dir, likedUserId) => {
        console.log("removing: " + likedUserId);
    }
    const outOfFrame = nameLeft => console.log(nameLeft + " left the screen!");

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                {users.map(user => {
                    if (user._id !== currentUserId) return (
                        <TinderCard 
                            className='swipe'
                            key={user._id}
                            preventSwipe={['up', 'down']}
                            onSwipe={dir => swiped(dir, user._id)}
                            onCardLeftScreen={() => outOfFrame(user._id)}
                        >
                            <div className='card'>
                                <div className='user-img'>
                                    <h3>{user._id}</h3>
                                </div>
                                <div className='user-prof'>
                                    <h3>bio</h3>
                                </div>
                            </div>
                        </TinderCard>
                )})}
            </div>
        </div>
    )
}

export default SwipeCards;