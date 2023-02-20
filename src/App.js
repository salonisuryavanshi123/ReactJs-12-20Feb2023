//1. Import Area
// import from somelibrary/somelocation
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

//2. Defination Area
//Function Defination Area
export default function App(){
    //Every function return something
    return (
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={ <Home /> }></Route>
                 <Route path='/login' element={ <Login />}></Route>
                 
             </Routes>
         </BrowserRouter>
    );
}