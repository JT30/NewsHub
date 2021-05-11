import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Grid from "./components/grid";

function App() {
  const prestateOfCategory = "all";
  let [category, setCategory] = useState(prestateOfCategory);
  const navItemClick = (event) =>{
      setCategory(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        NEWSHUB
      </header> 
      <div className="Content">
        <NavBar itemClick = {navItemClick} category={category}/>
        <Grid category={category}/>
      </div>
      
    </div>
  );
}

export default App;
