import { useDispatch, useSelector} from "react-redux"
import { logout } from "../../store/session"
import './ProfileNavButton.css'
import { useHistory, Link } from "react-router-dom"

export const ProfileNavButton = () => {
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const history = useHistory()

    return (
        <>
            <div className="menu">
                <div className="item" onClick={() => history.push({ pathname: `/profile/${currUser._id}` , state: {fromApp: true, user: currUser}})}><span>View profile</span></div>
                <div className="item"><Link to='/updateprofile'><span>Update profile</span></Link></div>
                <div className="item" onClick={() => dispatch(logout())}><span>Logout</span></div>
                <div id="nav-button">
                    <img className={'profile-pic label'} src={currUser.photos[0] ? currUser.photos[0] : 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'}></img>
                </div>
            </div>
        </>
    )
}