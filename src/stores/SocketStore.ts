import React from 'react'
import {observable, action, computed} from 'mobx';
import socketio from 'socket.io-client';
import { useStores } from '../hooks/use-stores'

//export const socket = socketio.connect('http://3.34.108.83:3000');
export const socket = socketio.connect('http://localhost:3000');

//export const SocketContext = React.createContext(socket);