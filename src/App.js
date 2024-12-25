import './App.css';
import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './comp/navbar';
import BookForm from './comp/addbook';
import FncDisplayBooks from './comp/Displaybook';
import BookUpDateForm from './comp/update';
//import  DisplayData  from './comp/displaydata';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Welcome to the Book Manager</h1>} />
                <Route path="/add-book" element={<BookForm />} />
                <Route path="/display-book" element={<FncDisplayBooks />} />
                <Route path="/update-book" element={<BookUpDateForm />} />
            </Routes>
        </div>
    );
}

export default App;