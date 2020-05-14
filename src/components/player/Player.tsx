import React from 'react';
import YouTube from '@u-wave/react-youtube';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-stores'

const Player = observer(() => {
    
    const {videosStore, socket} = useStores();
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
        console.log( "_onReady", event);
        event.target.pauseVideo();
    }
    function _onError(event: any) {
        console.log('onError', event);
        videosStore.playNext();
    }

    socket.emit('changeSong', videosStore.getCurIndex);

    // autoplay
  return (
      <YouTube
        width="500"
        height="450"
        video={videosStore.getCurVideoId}
        onReady={_onReady}
        onEnd={_onEnd}
        onError={_onError}
        autoplay/>
  );
});

export default Player;
