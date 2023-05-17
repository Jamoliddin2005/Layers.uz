import './App.css';
import { Routes, Route } from "react-router-dom"


// Import Pages
import Home from "./Pages/Home/Home"

// Import Components
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [languageBoolean, setLanguageBoolean] = useState(false)
  const [languageList] = useState(["RU", "EN", "UZ"]);
  const [language, setLanguage] = useState([]);

  const Language = () => {
    let languageStorage = localStorage.getItem("language")
    if (languageStorage !== "RU" && languageStorage !== "EN" && languageStorage !== "UZ") {
      const success = (possition) => {
        const latitude = possition.coords.latitude
        const longitude = possition.coords.longitude

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
          .then(res => res.json())
          .then(data => {
            if (data.countryCode) {
              const countryCode = data.countryCode
              if (countryCode === "RU" || countryCode === "EN" || countryCode === "UZ") {
                localStorage.setItem("language", data.countryCode);
                window.location.reload();
              }
            }
          })
      }
      const error = (error) => {
        localStorage.setItem("language", "UZ");
      }
      const GetLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
      }
      GetLocation()
    }

    const lan = languageList;
    const target = lan.splice(lan.indexOf(localStorage.getItem("language") || "RU"), 1);
    lan.unshift(target[0]);
    setLanguage(lan);
    setLanguageBoolean(true)

  };
  useEffect(() => {
    Language();
  }, []);

  return (
    <div className="Layers">
      {languageBoolean &&
        <>
          <Navbar language={language} />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </>}
    </div>
  );
}

export default App;
