

export default function MatchListItem( {match} ) {
  return(
    <li>
      <a href="">
        <img src="" alt="matched user" />
        <h2>{match.user.firstName}</h2>
      </a>
    </li>
  )
}