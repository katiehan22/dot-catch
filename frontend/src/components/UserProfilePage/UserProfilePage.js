import { useLocation, Redirect } from 'react-router-dom';
import MatchesSidebar from '../MatchesSidebar/MatchesSidebar';
import ProfileComponent from './ProfileComponent/ProfileComponent';
import './UserProfilePage.css';

const UserProfilePage = () => {
    const location = useLocation();
    const { user } = location.state || {};

    if (!location.state?.fromApp) return <Redirect to='/' />

    return (
        <section className='main-page'>
            <MatchesSidebar />
            <section className='profile-section'>
                <div className='profile-card-container'>
                    <ProfileComponent user={user} />
                </div>
            </section>
        </section>
    )
}

export default UserProfilePage;