import React from 'react'
import VideoStore from './VideoStore';
import UserStore from './UserStore';
import { socket } from './SocketStore';

export const storesContext = React.createContext({
    videosStore: new VideoStore(),
    userStore: new UserStore(),
    socket: socket
})


// class RootStore {
//     public videoStore: VideoStore;
//     constructor() {
//         this.videoStore = new VideoStore();
//     }
// }
  
// export default RootStore;