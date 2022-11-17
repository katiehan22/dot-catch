import { useEffect, useState} from "react"
import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/session"
import './ProfileNavButton.css'
import { useHistory } from "react-router-dom"

export const ProfileNavButton = () => {
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)
    const history = useHistory()

    return (
        <>
            <div className="menu">
                <div className="item" onClick={() => history.push({ pathname: `/profile/${currUser._id}` , state: {fromApp: true, user: currUser}})}><span>View profile</span></div>
                <div className="item"><span>Update profile</span></div>
                <div className="item" onClick={() => dispatch(logout())}><span>Logout</span></div>
                <div id="nav-button">
                    <img className={'profile-pic label'} src='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'></img>
                </div>
            </div>
        </>
    )
}