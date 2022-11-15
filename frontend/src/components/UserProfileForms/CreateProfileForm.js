import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserErrors, updateUser } from "../../store/users";

const CreateProfileForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const errors = useSelector(state => state.errors.users);

  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [favLang, setFavLang] = useState('');
  const [tabSpace, setTabSpace] = useState('');
  const [macPc, setMacPc] = useState('');
  const [lightDark, setLightDark] = useState('');

  useEffect(() => {
    return () => {
      dispatch(clearUserErrors());
    };
  }, [dispatch]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      firstName: firstName,
      age: age,
      location: location,
      gender: gender,
      genderPreference: genderPreference,
      prompt1: favLang,
      prompt2: tabSpace,
      prompt3: macPc,
      prompt4: lightDark
    }
    dispatch(updateUser(updatedUser));
  }

  return (
    <>
      <div className="create-user-profile-container">
        <form className="user-profile-form" onSubmit={handleProfileSubmit}>
          
        </form>
      </div>
    </>
  )
}

export default CreateProfileForm;