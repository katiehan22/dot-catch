import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/users';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';

const SwipeCards = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    // const userLikes = useSelector(state => state.entities.users.likes !== {} ? Object.keys(state.entities.users.likes) : []);
    // console.log(userLikes)
    const currentUser = useSelector(state => state.session.user ? state.session.user : null);
 
    const swiped = (dir, likedUserId) => {
        if (dir === 'right') {
            dispatch(updateUser({ ...currentUser, likedUserId }));
        }
    }
    // const outOfFrame = nameLeft => console.log(nameLeft + " left the screen!");

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                {users.map(user => {
                    if (user._id !== currentUser._id) return (
                        <TinderCard 
                            className='swipe'
                            key={user._id}
                            preventSwipe={['up', 'down']}
                            onSwipe={dir => swiped(dir, user._id)}
                            // onCardLeftScreen={() => outOfFrame(user._id)}
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