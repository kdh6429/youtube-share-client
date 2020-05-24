import {observable, action, computed} from 'mobx';

export default class VideoStore {
  @observable 
  videos:Array<any> = [];
  
  @observable 
  curIndex: number = -1;
  @observable 
  curVideoID: string = "";
  
  get getVideos(): any {
    return this.videos;
  }

  @action
  addVideo(video: any): void {
    this.videos.push( video);
  }
  @action
  addVideos(videos: any): void {
    this.videos = videos;
  }
  @action
  disableSong(index: number): void {
    this.videos[index].disable = !this.videos[index].disable;
  }
  @action
  deleteSong(videoId: string): void {
    const itemToFind = this.videos.find(function(item) {
      return item.id == videoId;
    })
    const idx = this.videos.indexOf(itemToFind) 
    if (idx > -1) 
    {
      this.videos[idx].delete = true;
      //this.videos.splice(idx, 1);
    }
  }
  get getCurIndex(): number {
    return this.curIndex;
  }
  get getCurVideoId(): string {
    return this.curVideoID;
  }
  
  playNext(): void {
    let cnt=0;
    while(cnt<100) {
      cnt++;
      this.curIndex = (this.curIndex + 1) % this.videos.length;
      if(!this.videos[ this.curIndex].disable && !this.videos[ this.curIndex].delete) {
        break;
      }
    }
    if(cnt==100) {
      alert("NO SONG")
      return;
    }

    this.curVideoID = this.videos[ this.curIndex].id;
  }
  playSong(index: number): void {
    this.curIndex = index;
    this.curVideoID = this.videos[ index].id;
  }
}
