import { useSelector } from "react-redux"

export default function MatchListItem( {match} ) {
  const matchedUser = useSelector( state => state.users[match] )
  
  if ( matchedUser === undefined ) return null;
  
  return(
    <li>
      <a href="">
        <img src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt="matched user" />
        <h2>{matchedUser.firstName}</h2>
      </a>
    </li>
  )
}