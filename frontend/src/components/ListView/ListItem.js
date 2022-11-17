import { Link } from "react-router-dom"
import ProfileComponent from "../UserProfilePage/ProfileComponent/ProfileComponent"
import { useState, useEffect } from "react"


export const ListItem = ({user}) => {
    const [menu, setMenu] = useState(false)

    const toggleView = () => {
        if (menu) {
            return setMenu(false)
        } else {
            return setMenu(true)
        }
    }

    const closeMenu = () => {
        setMenu(false)
    }


    return (
        <>
        <section onClick={toggleView} className="profile-container">
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'></img>
            <h3>{user.firstName}</h3>
        </section>
        <div className="profile-display" style={menu ? {display: 'block'} : {display: 'none'}}>
            <ProfileComponent user={user}></ProfileComponent>
            <button onClick={toggleView}>X</button>
        </div>
        </>

    )
}