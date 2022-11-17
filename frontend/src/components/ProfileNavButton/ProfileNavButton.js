import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/session"
import './ProfileNavButton.css'

export const ProfileNavButton = () => {
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)

    return (
        <>
            <div className="menu">
                <div className="item"><span>Update profile</span></div>
                <div className="item" onClick={() => dispatch(logout())}><span>Logout</span></div>
                <div id="nav-button">
                    <img className={'profile-pic label'} src={ currUser.photos ? currUser.photos[0] : `https://media.wired.com/photos/5926fb75cfe0d93c47431fef/master/pass/fb_14-m-zuckerberg4_0963_fullsizeJPG_SRGB.jpg`}></img>
                </div>
            </div>
        </>
    )
}