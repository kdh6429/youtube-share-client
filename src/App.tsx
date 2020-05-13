import React from 'react';
// import logo from './logo.svg';
import './App.css';

import VideoManager from './components/videoManager';
import Main from './components/Main';
// import StoreProvider from './context';

const App = () => {
  
  VideoManager();

  return (
      <Main></Main>
  )
};

export default App;
