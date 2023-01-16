import axios from "axios";
import { useEffect, useState } from "react";
import "./weatherResult.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { 
    IconButton, 
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
} from '@chakra-ui/react';
import "./input.css";

const WeatherResult = () => {


    const [cityName, setCityName] = useState("");
    const [data, setData] =useState();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherResult(cityName);
    }

    const apiKey = process.env.REACT_APP_API_KEY;
    const getWeatherResult = (name) => {
        const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
        axios.get(baseURL)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }
    return(
        <div className="main">

        <div className="searchField">
            <FormControl className='inputForm'>
                <Input placeholder="search by city" value={cityName} onChange={(e) => setCityName(e.target.value)} size="md" width="auto" style={{ marginRight : 10 }} />
                <IconButton 
                    aria-label='Search database'
                    type='submit' 
                    icon={<SearchIcon />} 
                    onClick = {handleSubmit}
                    />
            </FormControl>
        </div>
            <div className="main-data">
                <h1>{data?.name}</h1>
                <div className="reading">
                    <h3>{((data?.main?.temp) - 273.15).toFixed(2)} °C</h3>
                    <h4>Feels like {((data?.main?.feels_like) -273.15).toFixed(2)} °C</h4>
            </div>
                <div className="desccription">
                    <h3>{data?.weather[0].main}</h3>
                </div>
            </div>
        </div>
    );
}
export default WeatherResult;