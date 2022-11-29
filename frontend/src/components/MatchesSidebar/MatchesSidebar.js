import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../store/users";
import MatchesList from "./MatchesList"
import './MatchesSidebar.css'

export default function MatchesSidebar({setIsLoading}) {

  const dispatch = useDispatch();
  
  const matchesArray = useSelector(state => state.session.user !== {} ? Object.keys(state.session.user.matches) : []);

  useEffect(() => {
      dispatch(fetchUsers()).then(() => {
        if (setIsLoading) setIsLoading(false);
      })
  }, [dispatch, matchesArray.length])

  return(
    <section className="matchesSidebarContainer">
      <h1 className="matchesSidebarTitle">Matches</h1>
      <h2 className="matchesSidebarSubTitle">Click a Match to Send a Message!</h2>
      <div>
        <MatchesList matchesArray={matchesArray} />
      </div>
    </section>
  )
}