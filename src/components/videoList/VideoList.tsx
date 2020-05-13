import React from 'react';
import { useStores } from '../../hooks/use-stores'
import { observer } from "mobx-react";
import styled from "styled-components"
import Player from '../player';
import VideoStore from '../../stores/VideoStore';

export const VideoView: React.FC<{ videos: any[] }> = observer(({ videos }) => {
    // return useObserver(() => {
      
    const {videosStore, socket} = useStores();
      if (videos==null || !videos || videos.length == 0) return <ul></ul>;
      console.log( "videos", videos);

      const Wrapper = styled.tr `
          text-align: left;
          border: solid 1px #c1c0c0;
          cursor: pointer;
          padding: 5px;
          width: 710px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      `
      const StyledIndex = styled.td `
        font-size: 20px;
        width: 30px;
        text-align: right;
        padding: 5px;
      `
      const StyledAdder  = styled.div `
          font-size: 13px;
          color: gray;
      `
      const StyledTitle  = styled.div `
          font-size: 20px;
          margin-bottom: 10px;
      `
      function playSong(index: number): void {
        videosStore.playSong(index);
      }
      function disableSong(index: number): void {
        videosStore.disableSong(index);
      }
      return (
        <table style={{width: '730px', marginTop: '10px'}}>
        { videos && videos.length > 0 && videos.map( (video, index) => 
          <Wrapper style={video.disable? {textDecoration: 'line-through'}: {}}>
            <StyledIndex>{ index==videosStore.getCurIndex? 'NOW' : index+1}</StyledIndex>
            <td onClick={() => playSong(index)}>
            <StyledAdder>{video.adder} 님이 추가하신 노래</StyledAdder>
            <StyledTitle>{video.title}</StyledTitle>
            </td>
            <td onClick={() => disableSong(index)}>
              X
            </td >
          </Wrapper>
        )}
        </table>
      )
  })
  
export const VideoList = observer(() => {
    const {videosStore, socket} = useStores();
    if (!videosStore) throw Error("Store shouldn't be null");

    return <VideoView videos={videosStore.getVideos} />
        
    // <>
    // <button onClick={store.add}>ADD</button>
    // </>


// return useObserver(() => {
//   return (
//     <>
//     <button onClick={store.add}>ADD</button>
//     <CityView cities={store.filteredCities} />
//     </>
    
//   )
// });
})

export default VideoList;
  