import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import axios from 'axios'
import "./Home.css"
import Cities from '../Cities/Cities'
import { SearchContext } from '../Context/Context'
const Home = () => {

    let {search} = useContext(SearchContext)                  // using Context for setting search
    let [weatherData, setWeatherData] = useState({})

    let fetchWeatherData = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e34c10238103c48d731a1243be7e0079`
            let { data } = await axios.get(url);
            
            // data destructuring for resuil
            
            let { temp, humidity, temp_max, pressure } = data.main;
            let { main: weathermood } = data.weather[0];
            let {all} = data.clouds
            let { name } = data;
            let { visibility } = data;
            let { speed } = data.wind;
            let { country, sunset, sunrise } = data.sys;
            let myobj = {
                temp ,all, humidity,temp_max,pressure,weathermood,name,visibility,speed,country,sunset,sunrise
              }
              setWeatherData(myobj)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchWeatherData()
    }, [search])
    return (
        <div className="homeComponent" id='Home'>

            <div className="home">
                <Navbar />
                <img src="https://w0.peakpx.com/wallpaper/910/111/HD-wallpaper-dark-clouds-sky-sun.jpg" alt="WeaterImage" className='weatherImg' />
                <div className='homeMain'>
                    <div className="weatherDetails ">
                        <h3>Weather Details</h3>
                        <div className="cloudy d-flex">
                            <h5>Clouds</h5>
                            <p>{weatherData.all}%</p>
                        </div>
                        <div className="humidity d-flex" >
                            <h5>Humidity</h5>
                            <p>{weatherData.humidity}%</p>
                        </div>
                        <div className="wind d-flex">
                            <h5>Wind</h5>
                            <p>{weatherData.speed} km/h</p>
                        </div>
                    </div>
                </div>
                <div className="homeWrapper">
                    <div className="tempreture">
                        <h1 className='tempHeading'>{weatherData.temp}&#8451;</h1>
                    </div>
                    <div className="place mx-3">
                        <h2>{weatherData.name}</h2>
                        <small className='my-3'>MON 13-03-2023 </small>
                    </div>

                </div>

            </div>
            <Cities />
        </div>

    )
}

export default Home
