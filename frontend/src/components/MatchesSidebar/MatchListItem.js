import { useSelector } from "react-redux"

export default function MatchListItem( {match} ) {
  const matchedUser = useSelector( state => state.users[match] )
  return(
    <li>
      <a href="">
        <img src="" alt="matched user" />
        <h2>{matchedUser.firstName}</h2>
      </a>
    </li>
  )
}