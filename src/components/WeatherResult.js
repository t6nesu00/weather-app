import axios from "axios";
import { useState } from "react";

const baseURL = "http://api.weatherapi.com/v1/current.xml?key=2532b292b1414fcba1463833222505&q=London";

const WeatherResult = () => {
    const [data, setData] = useState([]);
    //get data from API
        axios.get(`${baseURL}`)
        .then((response) => {
            setData(response); 
        })
        .catch(error => console.log(`Error: ${error}`));
    
    return(
        <div>
            <h1>We are fetching...</h1>
            <p>{setData}</p>
        </div>
    );
}

export default WeatherResult;