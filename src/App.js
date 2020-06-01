import React from 'react';
import classes from './App.module.css';
import Logo from './components/Logo/Logo';
import WeatherLoader from './components/WeatherLoader/WeatherLoader';
// import axios from 'axios';

function App() {
  return (
    <div className={classes.App}>
      <header>
        <Logo/> 
      </header>
      <main>
        <WeatherLoader/>
      </main>
    </div>
  );
}

export default App;
