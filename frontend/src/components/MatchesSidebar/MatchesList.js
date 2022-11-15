import MatchListItem from "./MatchListItem"

export default function MatchesList( { matchesArray } ) {
  const listItems = matchesArray.map(match =>
    <MatchListItem
      key={match}
      match={match}
    />
  )

  return(
    <ul className="matchesGrid">
      {listItems}
    </ul>
  )
}