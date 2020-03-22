import {observable, action, computed} from 'mobx';
export default class YTListStore {
  
  @observable number = 0;
  @observable playList = 0;

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
  
  @computed 
  get total() {
    return this.number * this.number;
  }
}