import { useSelector } from "react-redux"
import MatchesList from "./MatchesList"

export default function MatchesSidebar() {

  const allMatches = useSelector( state => state.users[state.session.currentUser].matches )
  const matchesArray = Object.keys(allMatches)

  return(
    <section>
      <h1>Matches</h1>
      <div>
        <MatchesList matchesArray={matchesArray} />
      </div>
    </section>
  )
}