import React from 'react';
import Topbar from './components/Topbar';
import Posts from './containers/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Posts />
    </div>
  );
}

export default App;
