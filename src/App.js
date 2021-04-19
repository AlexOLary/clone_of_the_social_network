import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from './App.css'
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Router/>
                <Router/>
               {/* <Dialogs/>*/}
                <Profile/>
            </div>
        </div>
    );
}

export default App;
