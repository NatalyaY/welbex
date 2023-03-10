import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/index';

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
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
