import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let DialogsData =[
    {id:1, name:'Agil'},
    {id:2, name:'Murad'},
    {id:3, name:'Amil'},
    {id:4, name:'Samir'},
]
let MessageData = [
    {id:1, message:'Hi'},
    {id:2, message:'Nihau'},
    {id:3, message:'Assalamu ALeykum'},
    {id:4, message:'Privett'},
]
ReactDOM.render(<App data={DialogsData} msg={MessageData} />,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
