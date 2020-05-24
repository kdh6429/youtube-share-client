import {observable, action, computed} from 'mobx';

export default class UserStore {
  @observable 
  name=""

  @observable
  users:any={}

  get getName(): string {
    return this.name;
  }
  @action
  setName(name: string): void {
    this.name = name;
  }

  get getUsers(): any {
    return this.users
  }

  @action
  initUsers(data: any): void {
    this.users = data;
  }
  @action
  setUser(name: string, index: number): void {
    this.users[name] = index;
  }
  @action
  deleteUsers(name: string): void {
    delete this.users[name];
  }

  @computed
  get getUsersByIndex(): any {
    let usersByIndex: any = {}
    if(!this.users) return {};
    
    for (const [user, index] of Object.entries(this.users)) {
      if (!usersByIndex[index as number]) usersByIndex[index as number] = [];
      usersByIndex[index as number].push(user);
    }
    return usersByIndex
  }
}
