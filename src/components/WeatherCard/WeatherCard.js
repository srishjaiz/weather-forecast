import React from 'react';
import classes from './WeatherCard.module.css';

const WeatherCard = props => {
    return (
        <div className={classes.WeatherCardWrapper}>
            <div className={classes.WeatherCard}>
                <div>Current</div>
                <div>ForeCast</div>
            </div>
        </div>
    );
}

export default WeatherCard;