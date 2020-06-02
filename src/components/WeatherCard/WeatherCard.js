import React from 'react';
import classes from './WeatherCard.module.css';
import Current from './Current/Current';

const WeatherCard = props => {
    return (
        <div className={classes.WeatherCardWrapper}>
            <div className={classes.WeatherCard}>
                <Current/>
                <div>ForeCast</div>
            </div>
        </div>
    );
}

export default WeatherCard;