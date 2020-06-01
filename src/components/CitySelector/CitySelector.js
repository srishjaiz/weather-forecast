import React from 'react';
import classes from './CitySelector.module.css';

const CitySelector = props => {
    return (
        <form className={classes.CitySelectorForm} action="">
        <label htmlFor="color">Search city: </label>
        <input type="text" placeholder='Enter city here...' id="color" list="colors_data"/>
        <datalist id="colors_data">
            <option value="red"></option>
            <option value="orange"></option>
            <option value="green"></option>
            <option value="blue">The color of the sky</option>
        </datalist>
        </form>
    );
}

export default CitySelector;