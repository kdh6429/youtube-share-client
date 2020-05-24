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
        <>
        <div style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', color: 'chartreuse', textAlign: 'center'}}>
            ADD Youtube
        </div>
        <div style={{marginBottom: '20px', marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
            <div style={{float: 'left'}}><input type="text" style={{width: '500px', fontSize: '25px'}} value={videoId} placeholder="Youtube Video ID (예시: JgC_Kb5TYsU) " onChange={inputChange}/></div>
            <div style={{float: 'left'}}><button style={{fontSize: '25px'}} onClick={addVideo}>add</button></div>
        </div>
        </>
    )
}

export default VideoAddInput;
  