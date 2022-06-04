import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.js';
import Drawings from "./Drawings.js";
import Home from "./Home.js";
import Comics from "./Comics.js";
import ComicLoader from "./ComicsViewer.js";
import DrawingLoader from "./DrawingViewer.js";
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="drawings" element={<Drawings />} >
          <Route path=":drawingID" element={<DrawingLoader />}/>
        </Route>
        <Route path="comics" element={<Comics />}/>
        <Route path="comics/:comicID" element={<ComicLoader />}/>
        <Route path="*" element={<main style={{ padding: "1rem" }}> 
          <p>404 There's nothing here!</p>
          </main>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
