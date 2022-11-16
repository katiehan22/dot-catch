import { useLocation, Redirect } from 'react-router-dom';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import ProfileComponent from './ProfileComponent/ProfileComponent';
import './UserProfilePage.css';

const UserProfilePage = () => {
    const location = useLocation();
    const { user } = location.state || {};

    if (!location.state?.fromApp) return <Redirect to='/main' />

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <ProfileComponent user={user} />
        </section>
    )
}

export default UserProfilePage;