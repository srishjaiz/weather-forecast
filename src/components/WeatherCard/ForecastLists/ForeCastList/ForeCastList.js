import React from 'react';
import classes from './ForeCastList.module.css';

const ForeCastList = props => {
    return (
        <div className={classes.ForeCastList}>
            <div className={classes.MainInfo}>
                <div className={classes.MainInfoSuper}>
                    <img alt="weather-icon" src="http://openweathermap.org/img/wn/10d@4x.png"/>
                    <p>clouds</p>
                </div>
                <p className={classes.MainInfoSub}>22<sup style={{textTransform:"lowercase"}}>o</sup>C</p>
            </div>
            <div className={classes.SecondaryInfo}>
                <p>Time</p>
                <p>Date</p>
                <p>Desc text...</p>
            </div>
        </div>
    );
}

export default ForeCastList;