import React, {useState} from 'react';
import { useStores } from '../../hooks/use-stores'
import { observer } from "mobx-react";
import Player from '../player';
import VideoList from '../videoList/VideoList';
import VideoAddInput from '../VideoAddInput';
import VideoManager from '../videoManager';
import UserInput from '../UserInput';
import './Main.css';
export const Main = observer(() => {
    const {videosStore, userStore} = useStores();
    if (!videosStore) throw Error("Store shouldn't be null");
  
    return (
        <div className="App">
          { !userStore.getName && <UserInput />}
          { userStore.getName &&
            <>
              <VideoAddInput></VideoAddInput>
              <Player></Player>
              <VideoList></VideoList>
            </>
          }
        </div>
    )
});

export default Main;
  