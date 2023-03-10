import React from 'react';
import './App.scss';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header/>
            <svg width={0} height={0} hidden>
                <linearGradient id="socialsGradient">
                    <stop offset="36.99%" stopColor="#FCB045" ></stop>
                    <stop offset="100%" stopColor="#FD1D1D" ></stop>
                </linearGradient>
            </svg>
        </>
    );
}

export default App;
