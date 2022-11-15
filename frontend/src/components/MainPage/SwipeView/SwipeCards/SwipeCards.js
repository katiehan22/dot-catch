import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/users';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';

const SwipeCards = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const userLikes = useSelector(state => state.session.user.likes !== {} ? Object.keys(state.session.user.likes) : []);
    const userMatches = useSelector(state => state.session.user.matches !== {} ? Object.keys(state.session.user.matches) : []);
    const currentUser = useSelector(state => state.session.user ? state.session.user : null);

    const usersToSwipe = users.filter(user => !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id));
 
    const swiped = (dir, likedUserId) => {
        if (dir === 'right') {
            dispatch(updateUser({ ...currentUser, likedUserId }));
        }
    }
    // const outOfFrame = nameLeft => console.log(nameLeft + " left the screen!");

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                {usersToSwipe.map(user => 
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
                )}
            </div>
        </div>
    )
}

export default SwipeCards;