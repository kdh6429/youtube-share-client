import React, {useState} from 'react';
import { useStores } from '../../hooks/use-stores'
import { observer } from "mobx-react";
import Player from '../player';
import VideoList from '../videoList/VideoList';
import VideoAddInput from '../VideoAddInput';
import VideoManager from '../videoManager';
import UserInput from '../UserInput';
import './Main.css';
import { findByLabelText } from '@testing-library/react';
export const Main = observer(() => {
    const {videosStore, userStore} = useStores();
    if (!videosStore) throw Error("Store shouldn't be null");
  
    return (
      <>
      { !userStore.getName &&
          <div className="Login">
            <UserInput />
          </div>
      }
      { userStore.getName &&
        <div className="App">
          <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '600px'}}>
              <Player></Player> 
            </div>
            <div style={{width: '930px'}}>
              <VideoAddInput></VideoAddInput>
              <VideoList></VideoList>
            </div>
            
          </>
        </div>
        }
      </>
    )
});

export default Main;
  