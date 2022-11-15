import { useSelector } from "react-redux"
import MatchesList from "./MatchesList"

export default function MatchesSidebar() {

  // const matchesArray = useSelector( state => state.users ) START HERE

  return(
    <section>
      <h1>Matches</h1>
      <div>
        <MatchesList matchesArray={matchesArray} />
      </div>
    </section>
  )
}