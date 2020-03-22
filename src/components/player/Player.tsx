import React from 'react';
import YouTube from '@u-wave/react-youtube';
import { storeContext } from '../../context';
const Player = () => {
    const store = React.useContext(storeContext);
    if (!store) throw Error("Store shouldn't be null");

    
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };
    
    function _onEnd(event: any) {
        console.log( event);
    }
    function _onReady(event: any) {
        // access to player in all event handlers via event.target
        console.log( event);
        event.target.pauseVideo();
    }


    // autoplay
  return (
      <>
      <button onClick={store.add}>ADD</button>
      <YouTube
        width="500"
        height="450"
        video="2jKSfqOUePk"
        onReady={_onReady}
        onEnd={_onEnd}/>
      </>
    
  );
};

export default Player;
