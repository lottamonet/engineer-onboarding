//Import Header into homepage
import Header from "../Components/Header";
//Import Footer into homepage
import Footer from "../Components/Footer";
//Import Cards into homepage
import Card from "../Components/Card";
//Import 10 images to homepage
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import image6 from "../Assets/image6.jpg";
import image7 from "../Assets/image7.jpg";
import image8 from "../Assets/image8.jpg";
import image9 from "../Assets/image9.jpg";
import image10 from "../Assets/image10.jpg";
//Import CSS
import "../CSS/index.css";
//Import starterData
import {data} from "../Data/starterData";

//Import react
import React, {useState, useEffect} from "react";





const Home = () => {
    const [allEngineers, setAllEngineers] = useState(data);
    const [profile, setProfile] = useState(data[0]);
    const [formState, setFormState] = useState({
    handle: "",
    timeZone: "",
    favColor: "#ee5e5e",
    favLang: "",
    favTheme: "",
    favSnack: "",
    favMusic: "",
    favCity: "",
    imgSrc: ''
    
  });
  const [cityWeather, setCityWeather] = useState("");
  const [showForm, setShowForm] = useState(false);

  const imgArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  async function getWeather(city) {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db09f4e5bb153361c09f3528da86fb66`
    );
    let weatherData = await response.json();
    if (weatherData.weather) {
      console.log(weatherData.weather[0].description);
      setCityWeather(weatherData.weather[0].description);
    }
  }

const updateProfile = (e, item) => {
        setProfile(item);
        let citySplit = (item.favCity.split(",")[0]);
        getWeather(citySplit);
    }
  const handleFormChange = (e) => {
    const value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
    console.log(formState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    allEngineers.push(formState);
    setAllEngineers(allEngineers);
    document.getElementById('form').reset();
    setShowForm(false);

    
  };

  const displayForm = () => {
      setShowForm(true);
  }
  
  

  useEffect(() => {
    getWeather(profile.favCity);
  }, [profile]);

  //const classes = styles();

  
    

    return ( 
        <div id="content-wrapper">
            <Header  />
            <h1 className="main-heading">Our Engineers</h1>
            {/* <div id="card-wrapper"> */}
                 <div id="card-section" > 
                     {allEngineers.map((item, id) => (
                         <button id="handle-cards" className="handle-cards" style={{background: item.favColor}} onClick={(e) => updateProfile(e, item)}><Card imgSrc={id <=9 ?imgArray[id] : id > 9 && item.imgSrc === "../Assets/image2.jpg" ? imgArray[1] : imgArray[3] } handle={item.handle} timeZone={item.timeZone} favCity= {item.favCity} key={id}  /></button>
                     ))}
                </div>
            {/* </div> */}
            
            <button className="add-button" onClick={displayForm}>Add An Engineer</button>
            <h2 className="subheading">{profile.handle}</h2>
                <div id="handle-info">
                    <p className="label">Time Zone</p>
                    <p className="userInput">{profile.timeZone}</p>
                    <p className="label">Favorite Color</p>
                    <p className="userInput"><span id="circle" style={{ color: profile.favColor}}>&#9679;</span></p>
                    <p className="label">Favorite Programming Language</p>
                    <p className="userInput">{profile.favLang}</p>
                    <p className="label">Favorite Coding Theme</p>
                    <p className="userInput">{profile.favTheme}</p>
                    <p className="label">Favorite Coding Snack</p>
                    <p className="userInput">{profile.favSnack}</p>
                    <p className="label">Favorite Coding Music</p>
                    <p className="userInput">{profile.favMusic}</p>
                    <p className="label">Favoirte City's Weather Today</p>
                    <p className="userInput">The weather in {profile.favCity} is: {cityWeather}</p>
                </div>
            {showForm ? (
            <div id="form-section">
                <h1 className="onboarding">Engineer Onboarding</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Your handle/name: </label>
                    <input type="text" placeholder="Enter text" value={formState.handle} name="handle" onChange={(e) => handleFormChange(e)} /><br /> 
                    <label>Please Select: </label>
                    <select  name="timeZone" value={formState.timeZone} onChange={(e) => handleFormChange(e)}>
                        <option defaultValue value="">Time Zone</option>
                        <option value="Hawaiian-Aleutian Time">Hawaiian-Aleutian Time Zone (HDT/HST/HT)</option>
                        <option value="Alaskan-Yukon Time">Alaskan-Yukon Time Zone (AKDT/AKST, YDT/YST)</option>
                        <option value="Pacific Time">Pacific Time Zone (PDT/PST/PT)</option>
                        <option value="Mountain Time">Mountain Time Zone (MDT/MST/MT)</option>
                        <option value="Central Time">Central Time Zone (CDT/CST/CT)</option>
                        <option value="Eastern Time">Eastern Time Zone (EDT/EST/ET)</option>
                    </select><br />
                    <input  type="color" value={formState.favColor} name="favColor" onChange={(e) => handleFormChange(e)}></input><br />
                    <select  name="favLang" value={formState.favLang} onChange={(e) => handleFormChange(e)} >
                        <option defaultValue value="">Programming Language</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="JQuery">JQuery</option>
                        <option value="React.js">React.js</option>
                    </select><br />
                    <select name="favTheme"  value={formState.favTheme} onChange={(e) => handleFormChange(e)} >
                        <option defaultValue value="Coding Theme">Coding Theme</option>
                        <option value="Light Mode">Light Mode</option>
                        <option value="Dark Mode">Dark Mode</option>
                    </select><br />
                    <select name="favSnack" value={formState.favSnack} onChange={(e) => handleFormChange(e)} >
                        <option value="Coding Snack">Coding Snack</option>
                        <option value="Something Bitter">Something Bitter</option>
                        <option value="Something Salty">Something Salty</option>
                        <option value="Something Sour">Something Sour</option>
                        <option value="Something Sweet">Something Sweet</option>
                        <option value="Something Umami">Something Umami</option>
                        <option value="Something that's a combination of the above">Something that's a combination of the above</option>
                        <option value="None of the above">None of the above</option>
                    </select><br />
                    <select  name="favMusic" value={formState.favMusic} onChange={(e) => handleFormChange(e)} >
                        <option value="Coding Music">Coding Music</option>
                        <option value="Vocals only">Vocals only</option>
                        <option value="Instrumental only">Instrumental only</option>
                        <option value="Vocals + Instrumental">Vocals + Instrumental</option>
                        <option value="No Music">No music</option>
                    </select><br />
                    <select  name="favCity" value={formState.favCity} onChange={(e) => handleFormChange(e)} >
                        <option defaultValue value="">Favorite City</option>
                        <option value="Los Angeles, California">Los Angeles, California</option>
                        <option value="San Francisco, California">San Francisco, California</option>
                        <option value="Portland, Oregon">Portland, Oregon</option>
                        <option value="Seattle, Washington">Seattle, Washington</option>
                        <option value="Denver, Colorado">Denver, Colorado</option>
                        <option value="Tuscon, Arizona">Tuscon, Arizona</option>
                        <option value="Austin, Texas">Austin, Texas</option>
                        <option value="Chicago, Illinois">Chicago, Illinois</option>
                        <option value="Nashville, Tennessee">Nashville, Tennessee</option>
                        <option value="New Orleans, Louisiana">New Orleans, Louisiana</option>
                        <option value="Orlando, Florid">Orlando, Florida</option>
                        <option value="Atlanta, Georgia">Atlanta, Georgia</option>
                        <option value="New York, New York">New York, New York</option>
                        <option value="Honolulu, Hawaii">Honolulu, Hawaii
                        </option>
                        <option value="Anchorage, Alaska">Anchorage, Alaska</option>
                    </select><br />
                    <div id="select-img">
                        <div className="radioImg">
                            <img src= {image2} alt="fruittwo" />
                            <input className="radio-btn" type="radio" name="imgSrc" value="../Assets/image2.jpg" onChange={(e) => handleFormChange(e)}/>
                        </div>
                        <div className="radioImg">
                            <img src= {image4} alt="fruitfour" />
                            <input className="radio-btn" type="radio" name="imgSrc" value="../Assets/image4.jpg" onChange={(e) => handleFormChange(e)}/>
                        </div>
                    </div>
                    <button
                    type="submit" 
                    className="add-button" id="onboarding-add"> Add An Engineer</button>
                </form >
            </div>) : null }
            <Footer />
        </div>
     );
};

export default Home;