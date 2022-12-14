import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/users';
import { useHistory, useLocation } from 'react-router-dom';
import { receiveCurrentUser } from '../../../../store/session';
import SwipeCard from './SwipeCard/SwipeCard';
import './SwipeCards.css';
import ProfileComponent from '../../../UserProfilePage/ProfileComponent/ProfileComponent';
import { showInstructionsModal } from '../../../../store/ui';
import InstructionsModal from '../../../Instructions/InstructionsModal';

const SwipeCards = ({ isLoading, setIsLoading }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const randomUsers = ([...users].sort(() => 0.5 - Math.random())).slice(0, Math.round(0.75 * users.length));
    const tom = users.find(user => user.bio === "You're getting the hang of it! I am Tom. I like everyone. Match with me :)");
    const userLikes = useSelector(state => state.session.user.likes !== {} ? Object.keys(state.session.user.likes) : []);
    const userMatches = useSelector(state => state.session.user.matches !== {} ? Object.keys(state.session.user.matches) : []);
    const currentUser = useSelector(state => state.session.user ? state.session.user : null);
    const [restartDeck, setRestartDeck] = useState(0);
    const modal = useSelector(state => state.ui.modal)

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

    const sortedDeck = usersToSwipe.reduce((acc, user) => {
        if (user === tom) return [...acc, user];
        return [user, ...acc];
    }, []);

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
        [users.length, restartDeck]
    )

    useEffect(() => {
        setCurrentIndex(usersToSwipe.length - 1);
    }, [users.length, restartDeck])

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    }

    const canSwipe = currentIndex >= 0;

    const swipe = async (dir) => {
        if (canSwipe) {
            await childRefs[currentIndex].current.swipe(dir)
        }
    }

    const resetDemo = () => {
        dispatch(updateUser({ ...currentUser, deleteLikes: true, deleteMatches: true }));
        const resetUser = { ...currentUser, likes: {}, matches: {} }
        if (!randomUsers.includes(tom)) dispatch(updateUser({ ...tom, likedUserId: currentUser._id }));
        randomUsers.forEach(user => dispatch(updateUser({ ...user, likedUserId: currentUser._id })));
        // setCurrentIndex(usersToSwipe.length - 1);
        setRestartDeck(restartDeck + 1);
        setIsLoading(true);
        dispatch(receiveCurrentUser(resetUser));
    }

    // const outOfFrame = nameLeft => console.log(nameLeft + " left the screen!");

    // console.log(currentIndex)

    if (tom === undefined || isLoading) return null;

    return (
        <div className='swipe-cards'>
            <div className='swipe-cards-container'>
                <div className='end-of-deck'>
                    <h1>You have run out of users to swipe!</h1>
                    {currentUser._id === '638652c27433cea88d6d70f3' && 
                        <>
                            <button onClick={resetDemo}>Start Over</button>
                            <p>For Demo User Only: Reset your likes, matches, and messages!</p>
                        </>
                    }
                </div>
                {sortedDeck.map((user, index) => (
                    <SwipeCard 
                        ref={childRefs[index]}
                        className='swipe'
                        key={user._id}
                        preventSwipe={['up', 'down', 'right', 'left']}
                        onSwipe={dir => swiped(dir, user, index)}
                    >
                        <ProfileComponent user={user} swipe={true} />
                    </SwipeCard>
                ))}
                {currentIndex > -1 && 
                <div className='buttonsContainer'>
                    <div className='buttons'>
                        <button className='dislike' onClick={() => swipe('left')}>.pop</button>
                        <button className='like' onClick={() => swipe('right')}>.push</button>
                    </div>
                    <h2
                    onClick={() => dispatch( showInstructionsModal() )}
                    className='instructions'
                    >Instructions
                    </h2>
                    {modal === 'instructions' && (<InstructionsModal></InstructionsModal>)}
                </div>
                }
            </div>
        </div>
    )
}

export default SwipeCards;