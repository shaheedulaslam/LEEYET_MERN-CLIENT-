import React from 'react';
import styles from './app.module.css';
import Navbar from './Navbar';
import Adding from './Adding';
import Productlist from './ProductList';




function App() {
let component
switch (window.location.pathname) {
  case "/":
    component = <Adding/>
    break;

  case "/products":
    component = <Productlist/>
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
