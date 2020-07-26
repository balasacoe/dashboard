import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to={{ pathname: '/workboard' }}>View Board</Link>{' '}
      </header>
    </div>
  );
}

export default Home;
