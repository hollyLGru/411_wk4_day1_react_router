/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Routes, Route } from 'react-router'
// Write component imports here //

// Local imports. Import components we built ourselves
import Home from './components/Home';
import About from './components/About';

const Router = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    );
}


export default Router;
