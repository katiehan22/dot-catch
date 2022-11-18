import { ListItem } from './ListItem';
import './ListView.css';
import { useSelector } from 'react-redux';

const ListView = () => {
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const currentUser = useSelector(state => state.session.user);
    const likes = users.filter(user => Object.keys(user.likes).includes(currentUser._id));
    
    const preferencedLikes = likes.filter(user => {
        switch (currentUser.genderPreference) {
            case 'M':
                return currentUser.genderPreference === user.gender;
            case 'F':
                return currentUser.genderPreference === user.gender;
            case 'N':
                return currentUser.genderPreference === user.gender;
            case 'NP':
                return true;
            case undefined:
                return true;
        }
    });

    // const createListItem = () => {
    //     const formatted = []

    //     users.forEach(user => {
    //         if (user._id !== currId){
    //             formatted.push(<ListItem key={user._id} user={user}></ListItem>)
    //         } else {
    //             formatted.unshift(<ListItem key={user._id} user={user}></ListItem>)
    //         }
    //     });
    //     return formatted
    // }

    return (
        <section className='list-view-section'>
            {preferencedLikes.map(user => <ListItem key={user._id} user={user} />)}
        </section>
    )
}

export default ListView;