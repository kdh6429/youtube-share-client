import React, {useState} from 'react';
import { useStores } from '../../hooks/use-stores'
import { observer } from "mobx-react";

export const UserInput= () => {
    const {userStore, socket} = useStores();

    const [name, setName] = useState('');
    function addName() {
        if(!name) {
            alert('no name');
        }
        else {
            socket.emit('init', { room: 'music', name: name});
        }
    }
    
    function inputChange(event: any) {
        setName(event.target.value);
    }
    return (
        <>
        <h2>Share your music</h2>
        <input type="text" placeholder="닉네임을 입력하세요" value={name} onChange={inputChange}/>
        <button onClick={addName}>Log In</button>
        <br/><br/>
        <img src="main.png" />
        </>
    )
}

export default UserInput;
  