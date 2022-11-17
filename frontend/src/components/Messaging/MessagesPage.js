import { Redirect, useLocation } from "react-router-dom"
import MatchesSidebar from "../MatchesSidebar/MatchesSidebar"
import Messaging from "./Messaging"

export default function MessagesPage() {
  const location = useLocation();

  const {matchedUser} = location.state || {};
  if (!location.state?.fromApp) return <Redirect to='/' />
  
  return(
    <section className="main-page">
      <MatchesSidebar />
      <Messaging matchedUser={matchedUser} />
    </section>
  )
}