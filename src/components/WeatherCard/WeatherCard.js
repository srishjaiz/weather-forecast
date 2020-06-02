import React from 'react';
import classes from './WeatherCard.module.css';
import Current from './Current/Current';
import ForeCastLists from './ForecastLists/ForeCastLists';

const WeatherCard = props => {
    return (
        <div className={classes.WeatherCardWrapper}>
            <div className={classes.WeatherCard}>
                <Current/>
                <ForeCastLists/>
            </div>
        </div>
    );
}

export default WeatherCard;