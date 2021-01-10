import React from 'react';
import { NavLink, BrowserRouter} from 'react-router-dom';
import './App.css';
import TestHOC from './HOC/TestHOC'
const AppLink = (props) => {
  return(
    <NavLink {...props} activeClassName="active-link"> 
      {props.children}
    </NavLink>
  )
}




function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <AppLink to="/home">Home</AppLink>
            <AppLink to="/about">About</AppLink>
            <AppLink to="/contact">Contact Us</AppLink>
            <TestHOC></TestHOC>
        </div>
    </BrowserRouter>

  );
}

export default App;
