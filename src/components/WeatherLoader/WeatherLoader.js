import React, { Component } from 'react';
import classes from './WeatherLoader.module.css';
import CitySelector from '../CitySelector/CitySelector';

class WeatherLoader extends Component{
    render(){
        return (
            <div className={classes.WeatherLoader}>
                <CitySelector/>
            </div>
        )
    }
}

export default WeatherLoader;