import React, {useState} from 'react';
import { useStores } from '../../hooks/use-stores'
import { observer } from "mobx-react";

export const VideoAddInput= () => {
    const {videosStore, socket} = useStores();

    const [videoId, setVideoId] = useState('');
    function addVideo() {
        socket.emit('addVideo', videoId);
        setVideoId('');
    }
    
    function inputChange(event: any) {
        setVideoId(event.target.value);
    }
    return (
        <div style={{marginBottom: '20px'}}>
            <div style={{float: 'left'}}><input type="text" style={{width: '300px'}} value={videoId} placeholder="Youtube Video ID (예시: JgC_Kb5TYsU) " onChange={inputChange}/></div>
            <div style={{float: 'left'}}><button onClick={addVideo}>add</button></div>
        </div>
    )
}

export default VideoAddInput;
  