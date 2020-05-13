import React from 'react';
import YouTube from '@u-wave/react-youtube';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-stores'

const Player = observer(() => {
    
    const {videosStore} = useStores();
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };
    
    function _onEnd(event: any) {
        console.log( event);
        videosStore.playNext();
    }
    function _onReady(event: any) {
        console.log( event);
        event.target.pauseVideo();
    }

    // autoplay
  return (
      <YouTube
        width="500"
        height="450"
        video={videosStore.getCurVideoId}
        onReady={_onReady}
        onEnd={_onEnd}
        autoplay/>
  );
});

export default Player;
