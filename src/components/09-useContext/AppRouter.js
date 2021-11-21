import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { AbountScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
  

export const AppRouter = () => {
    
    return (
        <BrowserRouter>
            <div>
              <NavBar />

                <Routes>
                    <Route exact path="/about" element={ <AbountScreen />} />
                    <Route exact path="/login" element={ <LoginScreen /> } />
                    <Route exact path="/" element={ <HomeScreen /> } />

                   
                   
                </Routes>
            </div>
        </BrowserRouter>
    )
}
