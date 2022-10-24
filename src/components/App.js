import React from "react"
import '../App.css';
import NavBar from "./NavBar";
import Main from "./Main";
import Shoe from "./Shoe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;


      // {/* <header className="App-header">
      //     <Shoe />
      //     <p>
      //       Design your own shoe.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </Main> */}