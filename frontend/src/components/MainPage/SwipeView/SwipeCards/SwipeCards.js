import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/users';
import { receiveCurrentUser } from '../../../../store/session';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';
import Profile from '../../../Profile/Profile';

const SwipeCards = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const userLikes = useSelector(state => state.session.user.likes !== {} ? Object.keys(state.session.user.likes) : []);
    const userMatches = useSelector(state => state.session.user.matches !== {} ? Object.keys(state.session.user.matches) : []);
    const currentUser = useSelector(state => state.session.user ? state.session.user : null);
    
    const usersToSwipe = users.filter(user => {
        switch(currentUser.genderPreference) {
            case 'M':
                return !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id) && currentUser.genderPreference === user.gender;
            case 'F':
                return !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id) && currentUser.genderPreference === user.gender;
            case 'N':
                return !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id) && currentUser.genderPreference === user.gender;
            case 'NP':
                return !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id);
            case undefined:
                return !userLikes.includes(user._id) && user._id !== currentUser._id && !userMatches.includes(user._id);
        }
    });

    const swiped = (dir, likedUser) => {
        if (dir === 'right') {
            if (!Object.keys(likedUser.likes).includes(currentUser._id)) {
                dispatch(updateUser({ ...currentUser, likedUserId: likedUser._id }));
                dispatch(receiveCurrentUser({ ...currentUser, ...currentUser.likes[likedUser._id] = true }));
            } else {
                dispatch(updateUser({ ...currentUser, matchedUserId: likedUser._id }));
                dispatch(updateUser({ ...likedUser, matchedUserId: currentUser._id, deleteLikerId: currentUser._id }));
                dispatch(receiveCurrentUser({ ...currentUser, ...currentUser.matches[likedUser._id] = true }));
            }
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
                        onSwipe={dir => swiped(dir, user)}
                        // onCardLeftScreen={() => outOfFrame(user._id)}
                    >
                        <Profile user={user} />
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default SwipeCards;