import { observable } from "mobx";
import socketio from 'socket.io-client';

const socket = socketio.connect('http://localhost:3000');
(() => {
    socket.emit('init', { room: 'asdf' });
    socket.on('system', (msg: string) => {
      console.log(msg);
    });
})();

const info = observable({
    name: undefined,
    list: [{id: "2jKSfqOUePk", title: "test", "addby" : "DHKIM"}],
    users: {
        
    }
});

export const createStore = () => {
    const store = {
        // query: observable.box(''),
        // setQuery(query: string) {
        //     store.query.set(query.toLowerCase());
        // },
        add(e: any) {
            socket.emit('add', { id: '2jKSfqOUePk' });
            console.log( e);
        },
        get getList() {
            return info.list
        },
        get getUsers() {
            return info.users
        }
    };
    return store;
};

export type TStore = ReturnType<typeof createStore>

// import YTListStore from './store';
// import TestStore from './TestStore';

// class RootStore {
//     public ytList: YTListStore;
//     public test: TestStore;
//     constructor() {
//         this.ytList = new YTListStore();
//         this.test = new TestStore();
//     }
// }
  
// export default RootStore;