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
        <img className="matchedUserImg" src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt="matched user" />
        <h2 className="matchedUserName">{matchedUser.firstName}</h2>
      </Link>
    </li>
  )
}