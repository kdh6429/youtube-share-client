import {observable, action, computed} from 'mobx';

export default class UserStore {
  @observable 
  name=""

  get getName(): string {
    return this.name;
  }

  @action
  setName(name: string): void {
    this.name = name;
  }
}
