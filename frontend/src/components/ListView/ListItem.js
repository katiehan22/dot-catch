import { Link } from "react-router-dom"

export const ListItem = ({user}) => {

    return (
        <Link to={{pathname: `/profile/${user._id}`, state: {fromApp: true, user: user}}}>
            <section className="profile-container">
                <img src={user.photos[0] ? user.photos[0] : 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'}></img>
                <h3>{user.firstName}</h3>
            </section>
        </Link>
    )
}