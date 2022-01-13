import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  message: string;
};

function App({ message }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{message}</p>
        <button onClick={() => newFunction()}>
          This is a brande new thing
        </button>
      </header>
    </div>
  );
}

export default App;
