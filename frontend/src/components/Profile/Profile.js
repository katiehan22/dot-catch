import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Profile () {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  
  
  useEffect(() => {
    
  }, [currentUser, dispatch]);

  
    return (
      <>
        <h2>Hi from profile</h2>
        
      </>
    );
}

export default Profile;
