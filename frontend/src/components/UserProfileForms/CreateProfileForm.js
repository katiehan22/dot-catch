import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserErrors, updateUser } from "../../store/users";
import "./UserProfileForms.css";

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
  const [bio, setBio] = useState('');

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
      prompt4: lightDark,
      bio: bio
    }
    console.log(updatedUser)
    // dispatch(updateUser(updatedUser));
  }

  return (
    <>
      <div className="create-user-profile-container">
        <h1 className="profile-form-heading">Create your profile</h1>
        <form className="user-profile-form">
          <div className="user-profile-form-left">
            <label htmlFor="first-name">First Name: </label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <br />
            <label htmlFor="age">Age: </label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
            <br />
            <label htmlFor="location">City: </label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <br />
            <label htmlFor="gender">Gender: </label>
            <input type="radio" name="gender" id="gender" value="woman" onChange={(e) => setGender(e.target.value)} required />Woman
            <input type="radio" name="gender" id="gender" value="man" onChange={(e) => setGender(e.target.value)} required />Man
            <input type="radio" name="gender" id="gender" value="nonbinary" onChange={(e) => setGender(e.target.value)} required />Nonbinary
            <br />
            <label htmlFor="gender-preference">I'm Looking For: </label>
            <input type="radio" name="gender-preference" id="gender-preference" value="men" onChange={(e) => setGenderPreference(e.target.value)} required />Men
            <input type="radio" name="gender-preference" id="gender-preference" value="women" onChange={(e) => setGenderPreference(e.target.value)} required />Women
            <input type="radio" name="gender-preference" id="gender-preference" value="nonbinary" onChange={(e) => setGenderPreference(e.target.value)} required />Nonbinary people
            <input type="radio" name="gender-preference" id="gender-preference" value="no-preference" onChange={(e) => setGenderPreference(e.target.value)} required />No preference
          </div>
          <div className="user-profile-form-right">  
            <label htmlFor="language">Favorite Programming Language: </label>
            <select name="language" value={favLang} onChange={(e) => setFavLang(e.target.value)}>
              <option value="" disabled>Select Favorite Language</option>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
              <option value="c">C</option>
              <option value="ruby">Ruby</option>
              <option value="java">Java</option>
              <option value="html-css">HTML/CSS</option>
              <option value="sql">SQL</option>
            </select>
            <br />
            <label htmlFor="tabs-spaces">Tabs vs. Spaces: </label>
            <input type="radio" name="tabs-spaces" id="tabs-spaces" value="tabs" onChange={(e) => setTabSpace(e.target.value)} required />Tabs
            <input type="radio" name="tabs-spaces" id="tabs-spaces" value="spaces" onChange={(e) => setTabSpace(e.target.value)} required />Spaces
            <br />
            <label htmlFor="mac-pc">Mac vs. PC: </label>
            <input type="radio" name="mac-pc" id="mac-pc" value="mac" onChange={(e) => setMacPc(e.target.value)} required />Mac
            <input type="radio" name="mac-pc" id="mac-pc" value="pc" onChange={(e) => setMacPc(e.target.value)} required />PC
            <br />
            <label htmlFor="light-dark">Light Theme vs. Dark Theme: </label>
            <input type="radio" name="light-dark" id="light-dark" value="light" onChange={(e) => setLightDark(e.target.value)} required />Light
            <input type="radio" name="light-dark" id="light-dark" value="dark" onChange={(e) => setLightDark(e.target.value)} required />Dark
            <br />
            <label htmlFor="bio">Bio: </label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} required placeholder="What else do you want others to know about you?"/>
          </div>
        </form>
        <button className="create-profile-button" onClick={handleProfileSubmit}>Create Profile</button>
        <div className="errors">{errors?.users.age}</div>
      </div>
    </>
  )
}

export default CreateProfileForm;