// import shoe from './shoe.svg';
import './App.css';
// import Artboard from "./Artboard 1.png";
import Shoe from "./Shoe";
import React from "react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shoe />
        <p>
          Design your own shoe.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
