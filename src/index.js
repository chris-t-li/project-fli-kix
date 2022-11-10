const express = require('express')
const server = express()

server.use((req, res) => {
  res.send("Hi, welcome to FLI-KIX")
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
