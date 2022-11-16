import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import ProfileComponent from './ProfileComponent/ProfileComponent';
import './UserProfilePage.css';

const UserProfilePage = () => {
    

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <ProfileComponent user={user} />
        </section>
    )
}

export default UserProfilePage;