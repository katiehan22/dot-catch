import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function MatchListItem( {match} ) {

  const matchedUser = useSelector( state => state.entities.users[match] )
  
  if ( matchedUser === undefined ) return null;
  
  return(
    <li>
      <Link
      to={ {pathname: '/messages', state: { matchedUser, fromApp: true }}}
      className="matchItemContainer"
      >
        <section className="profile-container matched-container">
          <img src={matchedUser.photos[0] ? matchedUser.photos[0] : 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'}></img>
          <h3>{matchedUser.firstName}</h3>
        </section>
      </Link>
    </li>
  )
}