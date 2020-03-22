import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Player from './components/player';
import YTList from './components/ytlist';
import StoreProvider from './context';
function App() {

  // https://github.com/u-wave/react-youtube

  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Player></Player>
          <YTList></YTList>
        </header>
      </div>
    </StoreProvider>
    
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <input type="color"></input>
  //       <Avatar
  //           size={"small"}
  //           // status={state.status}
  //           // badge={0}
  //           // surfaceColor={state.surfaceColor}
  //           backgroundColor={"rgb(47, 57, 65);"}
  //           // foregroundColor={state.foregroundColor}
  //           isSystem
  //         >
  //           <Avatar.Text>ZD</Avatar.Text>
  //       </Avatar>
      

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
