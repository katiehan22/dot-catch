import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserErrors, updateUser, uploadPhoto } from "../../store/users";
import "./UserProfileForms.css";
import { receiveCurrentUser } from "../../store/session";

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
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    return () => {
      dispatch(clearUserErrors());
    };
  }, [dispatch]);

  const handleFiles = (e) => {
    const file = e.target.files[0];
    // const files = e.target.files;
    const filereader = new FileReader();
    dispatch(uploadPhoto(currentUser._id, file));
    // filereader.onloadend = () => {
    //   dispatch(uploadPhoto(currentUser._id, file));
      // console.log(file);
      // console.log(filereader.result);
      // setPhotos([{photoFile: file, photoUrl: filereader.result}])
    // };
    // if (file) {
    //   filereader.readAsDataURL(file);
    // }
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      firstName: firstName,
      age: age,
      location: location,
      gender: gender,
      genderPreference: genderPreference,
      prompt1: { "favLang": favLang },
      prompt2: {"tabSpace": tabSpace},
      prompt3: {"macPc": macPc},
      prompt4: {"lightDark": lightDark},
      bio: bio,
      photos: photos
    }
    console.log(updatedUser);
    // dispatch(uploadPhoto(currentUser._id, photos[0]))
    // dispatch(updateUser(updatedUser));
    // dispatch(receiveCurrentUser(updatedUser));
  }

  return (
    <>
      <div className="create-user-profile-page">
        <h1 className="profile-form-heading">Create your profile</h1>
        <form className="user-profile-form" onSubmit={handleProfileSubmit}>
          <div className="user-profile-form-container">
            <div className="user-profile-form-left">
              <div className="first-name-container">
                <label htmlFor="first-name">First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="profile-form-input"/>
              </div>
              <div className="age-container">
                <label htmlFor="age">Age: </label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required className="profile-form-input" />
              </div>
              <div className="city-container">
                <label htmlFor="location">City: </label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="profile-form-input" />
              </div>
              <div className="gender-container">
                <label htmlFor="gender">Gender: </label>
                <br />
                <input type="radio" name="gender" id="gender" value="F" onChange={(e) => setGender(e.target.value)} required />Woman
                <input type="radio" name="gender" id="gender" value="M" onChange={(e) => setGender(e.target.value)} required />Man
                <input type="radio" name="gender" id="gender" value="N" onChange={(e) => setGender(e.target.value)} required />Nonbinary
              </div>
              <label htmlFor="gender-preference">I'm Looking For: </label>
              <input type="radio" name="gender-preference" id="gender-preference" value="M" onChange={(e) => setGenderPreference(e.target.value)} required />Men
              <input type="radio" name="gender-preference" id="gender-preference" value="F" onChange={(e) => setGenderPreference(e.target.value)} required />Women
              <input type="radio" name="gender-preference" id="gender-preference" value="N" onChange={(e) => setGenderPreference(e.target.value)} required />Nonbinary people
              <input type="radio" name="gender-preference" id="gender-preference" value="NP" onChange={(e) => setGenderPreference(e.target.value)} required />No preference
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
              <br />
              <input type="file" multiple onChange={handleFiles}/>
            </div>
          </div>
          <input type="submit" value="Create Profile" className="create-profile-button" />
        </form>
        {/* <div className="errors">{errors?.users}</div> */}
      </div>
    </>
  )
}

export default CreateProfileForm;