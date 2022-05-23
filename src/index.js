import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.js';
import Drawings from "./drawings.js";
import DrawingViewer from "./drawing_viewer.js";
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Drawings />} />
        <Route path="drawings" element={<Drawings />} >
          <Route path=":drawingID" element={<DrawingViewer />}/>
        </Route>
        <Route path="comics" element={<Drawings />} />
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
