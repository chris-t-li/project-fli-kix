import React from "react"
import '../App.css';
import "../checkout.css";
import NavBar from "./NavBar";
import Main from "./Main";
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Righteous' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://use.typekit.net/yaq6azp.css"></link>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;