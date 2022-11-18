import { ListItem } from './ListItem';
import './ListView.css';
import { useSelector } from 'react-redux';

const ListView = () => {
    const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
    const currId = useSelector(state => state.session.user._id);
    const likes = users.filter(user => Object.keys(user.likes).includes(currId));

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
            {likes.map(user => <ListItem key={user._id} user={user} />)}
        </section>
    )
}

export default ListView;