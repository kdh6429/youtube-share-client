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
    console.log( "join", data);
    userStore.setName(data.name);
    userStore.initUsers(data.users);
    videosStore.addVideos(data.list);

    videosStore.playNext();
  });
  socket.on('addVideo', (video: any) => {
      console.log('addvideo', video);
      videosStore.addVideo(video);
  });
  socket.on('deleteVideo', (video: any) => {
    console.log('deleteVideo', video);
    videosStore.deleteSong(video.id);
  });

  socket.on('changeSong', (data: any) => {
    userStore.setUser( data.user, data.songIndex);
  });
  socket.on('deleteUser', (data: any) => {
    userStore.deleteUsers( data.user);
  });
}

export default VideoManager;
