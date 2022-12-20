import axios from "axios";
import { useEffect, useState } from "react";


const WeatherResult = () => {

    const [data, setData] = useState([]);
    const cityName = "London";
    const apiKey = process.env.REACT_APP_API_KEY;
    //get data from API
    const getWeatherResult = (cityName) => {
        const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=" + apiKey;
        axios.get(baseURL)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }

    useEffect(() => {
        getWeatherResult("London");
    }, [])
    
    return(
        <div>
            <h1>We are fetching...</h1>
            <h1>{data.name}</h1>
            <h3>{data.main.temp}°F</h3>
            <h4>Feels like: {data.main.feels_like}°F</h4>
            <h3>{data.weather[0].main}</h3>
        </div>
    );
}

export default WeatherResult;