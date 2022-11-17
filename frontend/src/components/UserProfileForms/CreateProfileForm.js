import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserErrors, fetchUsers, updateUser, uploadPhoto } from "../../store/users";
import "./UserProfileForms.css";
import { receiveCurrentUser } from "../../store/session";
import { useHistory, useLocation, Redirect } from "react-router-dom";

const CreateProfileForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.entities.users ? Object.values(state.entities.users) : []);
  const errors = useSelector(state => state.errors.users);
  const history = useHistory();
  const linkLocation = useLocation();
  
  const randomUsers = ([...users].sort(() => 0.5 - Math.random())).slice(0, Math.round(0.75 * users.length));
  const tom = users.find(user => user.bio === "You're getting the hang of it! I am Tom. I like everyone. Match with me :)");

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

  const [genderStyle, setGenderStyle] = useState({ "F": "profile-button-unchecked", "M": "profile-button-unchecked", "N": "profile-button-unchecked" });
  const [genderPrefStyle, setGenderPrefStyle] = useState({ "M": "profile-button-unchecked", "F": "profile-button-unchecked", "N": "profile-button-unchecked", "NP": "profile-button-unchecked" });
  const [favLangStyle, setFavLangStyle] = useState({ "javascript": "profile-button-unchecked", "python": "profile-button-unchecked", "c": "profile-button-unchecked", "ruby": "profile-button-unchecked", "java": "profile-button-unchecked", "html-css": "profile-button-unchecked", "sql": "profile-button-unchecked" });
  const [tabSpaceStyle, setTabSpaceStyle] = useState({ "tabs": "profile-button-unchecked", "spaces": "profile-button-unchecked"});
  const [macPcStyle, setMacPcStyle] = useState({ "mac": "profile-button-unchecked", "pc": "profile-button-unchecked" });
  const [lightDarkStyle, setLightDarkStyle] = useState({ "light": "profile-button-unchecked", "dark": "profile-button-unchecked" });

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
      dispatch(clearUserErrors());
    };
  }, [dispatch]);

  const handleGender = (genderSelection) => {
    const genderStyleCopy = { "F": "profile-button-unchecked", "M": "profile-button-unchecked", "N": "profile-button-unchecked" };
    setGenderStyle({ ...genderStyleCopy, [genderSelection]: "profile-button-checked"});
    setGender(genderSelection);
  }

  const handleGenderPref = (genderPrefSelection) => {
    const genderPrefStyleCopy = { "M": "profile-button-unchecked", "F": "profile-button-unchecked", "N": "profile-button-unchecked", "NP": "profile-button-unchecked" };
    setGenderPrefStyle({...genderPrefStyleCopy, [genderPrefSelection]: "profile-button-checked"});
    setGenderPreference(genderPrefSelection);
  }

  const handleFavLang = (favLangSelection) => {
    const favLangStyleCopy = { "javascript": "profile-button-unchecked", "python": "profile-button-unchecked", "c": "profile-button-unchecked", "ruby": "profile-button-unchecked", "java": "profile-button-unchecked", "html-css": "profile-button-unchecked", "sql": "profile-button-unchecked" };
    setFavLangStyle({...favLangStyleCopy, [favLangSelection]: "profile-button-checked"});
    setFavLang(favLangSelection);
  }

  const handleTabSpace = (tabSpaceSelection) => {
    const tabSpaceStyleCopy = { "tabs": "profile-button-unchecked", "spaces": "profile-button-unchecked" };
    setTabSpaceStyle({ ...tabSpaceStyleCopy, [tabSpaceSelection]: "profile-button-checked" });
    setTabSpace(tabSpaceSelection);
  }

  const handleMacPc = (macPcSelection) => {
    const macPcStyleCopy = { "mac": "profile-button-unchecked", "pc": "profile-button-unchecked" };
    setMacPcStyle({...macPcStyleCopy, [macPcSelection]: "profile-button-checked"});
    setMacPc(macPcSelection);
  }

  const handleLightDark = (lightDarkSelection) => {
    const lightDarkStyleCopy = { "light": "profile-button-unchecked", "dark": "profile-button-unchecked" };
    setLightDarkStyle({ ...lightDarkStyleCopy, [lightDarkSelection]: "profile-button-checked" });
    setLightDark(lightDarkSelection);
  }

  const handleFiles = (e) => {
    const file = e.target.files[0];
    // setPhotos(file);
    dispatch(uploadPhoto(currentUser._id, file));
  }

  const handleProfileSubmit = (e) => {
    // e.preventDefault();
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
      bio: bio
      // photos: photos
    }
    // dispatch(uploadPhoto(currentUser._id, photos[0]))
    dispatch(updateUser(updatedUser));
    dispatch(receiveCurrentUser(updatedUser));
    if (!randomUsers.includes(tom)) dispatch(updateUser({ ...tom, likedUserId: tom._id }));
    randomUsers.forEach(user => dispatch(updateUser({ ...user, likedUserId: currentUser._id })));
    history.push({pathname: '/', state: { newUser: true }});
  }

  if (!linkLocation.state?.fromApp) return <Redirect to='/' />

  return (
    <>
      <div className="create-user-profile-page">
        <h1 className="profile-form-heading">Create your profile</h1>
        {/* <form className="user-profile-form" onSubmit={handleProfileSubmit}> */}
        <div className="user-profile-form">
          <div className="user-profile-form-container">
            <div className="user-profile-form-left">
              <div className="first-name-container">
                <label htmlFor="first-name" className="profile-input-header">First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="profile-form-input"/>
              </div>
              <div className="age-container">
                <label htmlFor="age" className="profile-input-header">Age: </label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required className="profile-form-input" />
              </div>
              <div className="city-container">
                <label htmlFor="location" className="profile-input-header">City: </label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="profile-form-input" />
              </div>
              <div className="bio-container">
                <label htmlFor="bio" className="profile-input-header">Bio: </label>
                <br />
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} id="bio-field" required placeholder="Tell others about yourself." />
              </div>
              <div className="gender-container">
                <h2 className="profile-input-header">Gender:</h2>
                <div className="profile-buttons-container">
                  <button className={genderStyle["F"]} value="F" onClick={() => handleGender("F")}>Woman</button>
                  <button className={genderStyle["M"]} value="M" onClick={() => handleGender("M")}>Man</button>
                  <button className={genderStyle["N"]} value="N" onClick={() => handleGender("N")}>Nonbinary</button>
                </div>
              </div>
              <div className="gender-pref-container">
                <h2 className="profile-input-header">I'm Looking For:</h2>
                <div className="profile-buttons-container">
                  <button className={genderPrefStyle["M"]} onClick={() => handleGenderPref("M")}>Men</button>
                  <button className={genderPrefStyle["F"]} onClick={() => handleGenderPref("F")}>Women</button>
                  <button className={genderPrefStyle["N"]} onClick={() => handleGenderPref("N")}>Nonbinary People</button>
                  <button className={genderPrefStyle["NP"]} onClick={() => handleGenderPref("NP")}>No Preference</button>
                </div>
              </div>
            </div>
            <div className="user-profile-form-right">  
              <div className="fav-lang-container">
                <h2 className="profile-input-header">Favorite Programming Language:</h2>
                <div className="profile-buttons-container">
                  <button className={favLangStyle["javascript"]} onClick={() => handleFavLang("javascript")}>Javascript</button>
                  <button className={favLangStyle["python"]} onClick={() => handleFavLang("python")}>Python</button>
                  <button className={favLangStyle["c"]} onClick={() => handleFavLang("c")}>C</button>
                  <button className={favLangStyle["ruby"]} onClick={() => handleFavLang("ruby")}>Ruby</button>
                  <button className={favLangStyle["java"]} onClick={() => handleFavLang("java")}>Java</button>
                  <button className={favLangStyle["html-css"]} onClick={() => handleFavLang("html-css")}>HTML/CSS</button>
                  <button className={favLangStyle["sql"]} onClick={() => handleFavLang("sql")}>SQL</button>
                </div>
              </div>
              <div className="tabs-spaces-container">
                <h2 className="profile-input-header" >Tabs vs. Spaces:</h2>
                <div className="profile-buttons-container">
                  <button className={tabSpaceStyle["tabs"]} onClick={() => handleTabSpace("tabs")}>Tabs</button>
                  <button className={tabSpaceStyle["spaces"]} onClick={() => handleTabSpace("spaces")}>Spaces</button>
                </div>
              </div>
              <div className="mac-pc-container">
                <h2 className="profile-input-header" >Mac vs. PC:</h2>
                <div className="profile-buttons-container">
                  <button className={macPcStyle["mac"]} onClick={() => handleMacPc("mac")}>Mac</button>
                  <button className={macPcStyle["pc"]} onClick={() => handleMacPc("pc")}>PC</button>
                </div>
              </div>
              <div className="light-dark-container">
                <h2 className="profile-input-header">Light Theme vs. Dark Theme:</h2>
                <div className="profile-buttons-container">
                  <button className={lightDarkStyle["light"]} onClick={() => handleLightDark("light")}>Light</button>
                  <button className={lightDarkStyle["dark"]} onClick={() => handleLightDark("dark")}>Dark</button>
                </div>
              </div>
              <div className="photo-upload-container">
                <label className="custom-file-upload">
                  <input type="file" onChange={handleFiles} />
                </label>
                <input type="file" onChange={handleFiles} />
                <input type="file" onChange={handleFiles} />
              </div>
            </div>
          </div>
          {/* <input type="submit" value="Create Profile" className="create-profile-button" /> */}
          <button className="create-profile-button" onClick={() => handleProfileSubmit()}>Create Profile</button>
        </div>
        {/* <div className="errors">{errors?.users}</div> */}
      </div>
      {/* <img src={currentUser.photos[0]}/> */}
    </>
  )
}

export default CreateProfileForm;