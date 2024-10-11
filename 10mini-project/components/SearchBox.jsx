import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "341c760400fe0b020e0bb47225c30be7";

    let getWeatherInfo = async () => {

        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            console.log(jsonRes);
            let result = {
                city : city,
                temp : jsonRes.main.temp,
                minTemp : jsonRes.main.temp_min,
                maxTemp : jsonRes.main.temp_max,
                humidity : jsonRes.main.humidity,
                feelsLike : jsonRes.main.feels_like,
                description : jsonRes.weather[0].description,
            };
            // console.log(result);
            return result;
        }
        catch(error){
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError("true");
        }
    }

    return (
        <div>
            {/* <h2>Search For Weather</h2> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant='outlined' required value={city} onChange={handleChange}></TextField>
                <br /> <br />
                <Button variant='contained' type='submit'>Search</Button>
                <br /> <br />
                {error && <Alert severity="error">Place doesn't exist !.</Alert>}
            </form>
        </div>
    );
}