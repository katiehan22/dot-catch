import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, updateUser } from "../../store/users";
import MatchesList from "./MatchesList"
import './MatchesSidebar.css'

export default function MatchesSidebar() {

  const dispatch = useDispatch();
  
  const matchesArray = useSelector(state => state.session.user !== {} ? Object.keys(state.session.user.matches) : []);

  useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch, matchesArray.length])

  return(
    <section className="matchesSidebarContainer">
      <h1 className="matchesSidebarTitle">Messages</h1>
      <div>
        <MatchesList matchesArray={matchesArray} />
      </div>
    </section>
  )
}