import MatchListItem from "./MatchListItem"

export default function MatchesList( { matchesArray, setClickedMatchId, setShowMessages } ) {
  const listItems = matchesArray.map(match =>
    <MatchListItem
      key={match}
      match={match}
      setClickedMatchId={setClickedMatchId}
      setShowMessages={setShowMessages}
    />
  )

  return(
    <ul className="matchesGrid"
    >
      {listItems}
    </ul>
  )
}