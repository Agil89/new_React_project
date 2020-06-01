import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technologies from './Techno';
import Header from './components/Header/Header';
import Navbar from './components/Navs/Navbar';
import Content from './components/Contents/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
// import Technologies from './Techno.js'

const App = (props) => {
    
    

    return ( 
    <BrowserRouter>
    <div className='app-wrapper'>
     <Header />
    <Navbar />  
    <div className = 'app-wrapper-content'>
        <Route path='/dialogs' render={ ()=> <Dialogs data={props.data} msg={props.msg}/>}/>
        <Route path='/content' component={Content}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/music' component={Music}/>
    </div>
    </div>
    </BrowserRouter>
    );
}


export default App;