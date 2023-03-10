import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="container">
            <header className="App-header">
                <p>
          Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
            <svg width={0} height={0} hidden>
                <linearGradient id="socialsGradient">
                    <stop offset="36.99%" stopColor="#FCB045" ></stop>
                    <stop offset="100%" stopColor="#FD1D1D" ></stop>
                </linearGradient>
            </svg>
        </div>
    );
}

export default App;
