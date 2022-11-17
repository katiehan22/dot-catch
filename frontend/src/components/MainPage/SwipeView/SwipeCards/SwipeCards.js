import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/users';
import { useLocation } from 'react-router-dom';
import { receiveCurrentUser } from '../../../../store/session';
import TinderCard from 'react-tinder-card';
import './SwipeCards.css';
import ProfileComponent from '../../../UserProfilePage/ProfileComponent/ProfileComponent';

const SwipeCards = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const tom = users.find(user => user.bio === "You're getting the hang of it! I am Tom. I like everyone. Match with me :)");
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

    if (tom === undefined) return null;

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                {usersToSwipe.map((user, index) => (
                    <TinderCard 
                        className='swipe'
                        key={user._id}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir => swiped(dir, user)}
                        // onCardLeftScreen={() => outOfFrame(user._id)}
                    >
                        <ProfileComponent user={user} />
                    </TinderCard>
                ))}
                {!userMatches.includes(tom._id) &&
                    <TinderCard
                        className='swipe'
                        preventSwipe={['up', 'down', 'left']}
                        onSwipe={dir => swiped(dir, tom)}
                        // onCardLeftScreen={() => outOfFrame(user._id)}
                    >
                        <ProfileComponent user={tom} />
                    </TinderCard>
                }
                {
                    location.state ? 
                    <>
                        <TinderCard
                            className='swipe'
                            preventSwipe={['up', 'down', 'left']}
                        >
                            <div className='card instructions'>
                                <h1>Swipe right to like!</h1>
                            </div>
                        </TinderCard>
                        <TinderCard
                            className='swipe'
                            preventSwipe={['up', 'down', 'right']}
                        >
                            <div className='card instructions'>
                                <h1>Swipe left to pass!</h1>
                            </div>
                        </TinderCard>
                    </>
                    : null
                }
            </div>
        </div>
    )
}

export default SwipeCards;