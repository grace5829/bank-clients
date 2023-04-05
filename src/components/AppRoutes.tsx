import React from 'react'
import { Route, Routes } from "react-router-dom";
import App from '../App';
import Home from './Home';
import SingleClient from './SingleClient';

const AppRoutes = () => {
  return (
 <Routes>
    <Route path="/singleClient" element={<SingleClient/>}/>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/" element={<App/>}/> */}

    </Routes> 

    )
}

export default AppRoutes