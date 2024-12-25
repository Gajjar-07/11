import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
//import BookForm from './comp/addbook';
//import DisplayData from './comp/displaydata';
//import DeleteBook from './comp/deletebook';
//import BookUpDateForm from './comp/update';
//import ShowBooks from './comp/displaydata';
import reportWebVitals from './reportWebVitals';
//import DisplayData from './comp/displaydata';
import { BrowserRouter } from 'react-router-dom';
const container=document.getElementById('root');
const root =createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
