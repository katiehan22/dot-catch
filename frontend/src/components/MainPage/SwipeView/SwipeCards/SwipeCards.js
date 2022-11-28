import React, { useState, useRef, useMemo, useEffect } from 'react';
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

    const swiped = (dir, likedUser, index) => {
        updateCurrentIndex(index - 1)
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

    const [currentIndex, setCurrentIndex] = useState(usersToSwipe.length - 1);
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
            Array(usersToSwipe.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    }

    const canSwipe = currentIndex >= 0;

    const swipe = async (dir) => {
        console.log(childRefs)
        if (canSwipe && currentIndex < usersToSwipe.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // const outOfFrame = nameLeft => console.log(nameLeft + " left the screen!");

    if (tom === undefined) return null;

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                {/* {usersToSwipe.length === 0 &&  */}
                    <h1>You have run out of users to swipe!</h1>
                {/* } */}
                {usersToSwipe.map((user, index) => (
                    <TinderCard 
                        ref={childRefs[index]}
                        className='swipe'
                        key={user._id}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir => swiped(dir, user, index)}
                        // onCardLeftScreen={() => outOfFrame(user._id)}
                    >
                        <ProfileComponent user={user} swipe={true} />
                    </TinderCard>
                ))}
                {!userMatches.includes(tom._id) &&
                    <TinderCard
                        className='swipe'
                        preventSwipe={['up', 'down', 'left']}
                        onSwipe={dir => swiped(dir, tom)}
                        // onCardLeftScreen={() => outOfFrame(user._id)}
                    >
                        <ProfileComponent user={tom} swipe={true} />
                    </TinderCard>
                }
                {
                    location.state ? 
                    <>
                        <TinderCard
                            className='swipe'
                            preventSwipe={['up', 'down', 'left']}
                        >
                            <div className='card instructions grab'>
                                <h1>Swipe right to like!</h1>
                            </div>
                        </TinderCard>
                        <TinderCard
                            className='swipe'
                            preventSwipe={['up', 'down', 'right']}
                        >
                            <div className='card instructions grab'>
                                <h1>Swipe left to pass!</h1>
                            </div>
                        </TinderCard>
                    </>
                    : null
                }
                {/* <div className='buttons'>
                    <button onClick={() => swipe('left')}>Swipe left!</button>
                    <button onClick={() => swipe('right')}>Swipe right!</button>
                </div> */}
            </div>
        </div>
    )
}

export default SwipeCards;