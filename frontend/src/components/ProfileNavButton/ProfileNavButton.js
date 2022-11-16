import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/session"
import './ProfileNavButton.css'

export const ProfileNavButton = () => {
    const dispatch = useDispatch()
    const [menu, setMenu] = useState(false)
    const user = useSelector(state => state.session.user)

    const openMenu = () => {
        if(menu) return
        setMenu(true)
    }

    useEffect(() => {
        if(!menu) return 

        const closeMenu = () => {
            setMenu(false)
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [menu])

    const whichButtons = () => {
        if (menu && user) {
            return (
                <ul className="profile-dropdown">
                    <li>
                        <Link to='/'>
                            <button>Update profile</button>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => dispatch(logout())}>Log out</button>
                    </li>
                </ul>
            )
        }
    }

    return (
        <>
            <div id='button-dropdown'>
                <button id="nav-button" onClick={openMenu}>
                    <img className="profile-pic" src='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg' alt=""></img>
                </button>
                {whichButtons()}
            </div>
        </>
    )
}