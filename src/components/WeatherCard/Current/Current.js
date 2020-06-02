import React from 'react';
import classes from './Current.module.css';

const Current = props => {
    return (
        <div className={classes.Current}>
            <div className={classes.CurrentDetails}>
                <p className={classes.CurrentDeg}>12<sup style={{"textTransform":"lowercase"}}>o</sup>C</p>
                <p className={classes.CurrentDesc}>Clouds</p>
                <div className={classes.SecondLevelDescWrapper}>
                    <div>
                        <p>Feels Like</p>
                        <p>18<sup style={{"textTransform":"lowercase"}}>o</sup>C</p>
                    </div>
                    <div>
                        <div className={classes.VLine}></div>
                        <p>Humidity</p>
                        <p>64%</p>
                    </div>
                </div>
            </div>
            <div className={classes.CurrentCitynDate}>
                <p>City Name</p>
                <p>Current Date</p>
                <div className={classes.Line}></div>
            </div>
        </div>
    );
}

export default Current;