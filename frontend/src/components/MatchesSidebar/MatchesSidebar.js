import { useSelector } from "react-redux"
import MatchesList from "./MatchesList"
import './MatchesSidebar.css'

export default function MatchesSidebar( {setClickedMatchId, setShowMessages} ) {

  const allMatches = useSelector( state => state.session.user.matches )
  const matchesArray = Object.keys(allMatches)

  return(
    <section className="matchesSidebarContainer">
      <h1 className="matchesSidebarTitle">Matches</h1>
      <div>
        <MatchesList
        setClickedMatchId={setClickedMatchId}
        setShowMessages={setShowMessages}
        matchesArray={matchesArray} />
      </div>
    </section>
  )
}