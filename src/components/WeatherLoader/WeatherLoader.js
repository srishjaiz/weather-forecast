import React, { Component } from 'react';
import classes from './WeatherLoader.module.css';
import CitySelector from '../CitySelector/CitySelector';
import WeatherCard from '../WeatherCard/WeatherCard';

class WeatherLoader extends Component{
    render(){
        return (
            <div className={classes.WeatherLoader}>
                <CitySelector/>
                <WeatherCard/>
            </div>
        )
    }
}

export default WeatherLoader;