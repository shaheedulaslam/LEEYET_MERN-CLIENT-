import React from 'react';
import styles from './app.module.css';
import Navbar from './Navbar';
import Adding from './Adding';
import Userslist from './Userslist';




function App() {
let component
switch (window.location.pathname) {
  case "/":
    component = <Adding/>
    break;

  case "/users":
    component = <Userslist/>
    break;
}
  return (
    <div className={styles.app}>
    <Navbar/>
    {component}
    </div>
  );
}

export default App;
