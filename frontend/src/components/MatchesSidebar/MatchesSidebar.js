import { useSelector } from "react-redux"
import MatchesList from "./MatchesList"
import './MatchesSidebar.css'

export default function MatchesSidebar() {

  // const currentUser = useSelector( state => state.users[state.session.user] )

  const allMatches = useSelector( state => state.session.user.matches )
  const matchesArray = Object.keys(allMatches)

  return(
    <section className="matchesSidebarContainer">
      <h1 className="matchesSidebarTitle">Matches</h1>
      <div>
        <MatchesList matchesArray={matchesArray} />
      </div>
    </section>
  )
}