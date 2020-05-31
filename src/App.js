import React from 'react';
import classes from './App.module.css';
import Logo from './components/Logo/Logo';
// import axios from 'axios';

function App() {
  return (
    <div className={classes.App}>
      <header>
        <Logo/> 
      </header>
      <main>
        Main
      </main>
    </div>
  );
}

export default App;
