import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Information from './pages/information';
import About from './pages/About';
import Weather from './pages/Weather';

const MyRoutes = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Navigate to="/home" replace />}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/information' element={<Information/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/weather' element={<Weather/>}/>
            </Routes>
        // </BrowserRouter>
    );
};

export default MyRoutes;