import MatchListItem from "./MatchListItem"

export default function MatchesList( { matchesArray } ) {
  const listItems = matchesArray.map(match =>
    <MatchListItem
      key={match._id}
      match={match}
    />
  )

  return(
    <ul>
      {listItems}
    </ul>
  )
}