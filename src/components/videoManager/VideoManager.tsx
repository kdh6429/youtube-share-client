import React from 'react';
import { observer } from "mobx-react";
import { useStores } from '../../hooks/use-stores'
import socketio from 'socket.io-client';

export const VideoManager = () => {
  const {videosStore, socket, userStore} = useStores();
  if (!videosStore) throw Error("Store shouldn't be null");
  console.log( "inint");
  socket.on('system', (msg: string) => {
    console.log('system', msg);
    alert(msg);
  });
  socket.on('join', (data: any) => {
    userStore.setName(data.name);
    videosStore.setVideos(data.list);

    videosStore.playNext();
  });
  socket.on('addVideo', (video: any) => {
      console.log('addvideo', video);
      videosStore.setVideo(video);
  });
}

export default VideoManager;
