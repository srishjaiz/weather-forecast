import React from 'react';
import classes from './ForeCastLists.module.css';
import ForeCastList from './ForeCastList/ForeCastList';

const ForeCastLists = props => {
    return (
        <div className={classes.ForeCastLists}>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
            <ForeCastList/>
        </div>
    );
}

export default ForeCastLists;