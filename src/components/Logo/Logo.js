import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src="/logo.svg" alt="Kiwi standing on oval"></img>
            <span>Weather Forecast</span>
        </div>
    );
}

export default Logo;