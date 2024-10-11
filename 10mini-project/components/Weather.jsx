import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather(){
    const [weatherInfo, setWeatherInfo] = useState({    
        city : "New Delhi",
        temp : 24.34,
        minTemp : 20.20,
        maxTemp : 29.93,
        humidity : 48,
        feelsLike : 24.43,
        description : "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}