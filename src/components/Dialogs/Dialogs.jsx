import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) =>{

    
    

    let dialogsElements = props.data.map((el)=><DialogItem name = {el.name} id={el.id} />);
   
    let messagesElements = props.msg.map(el=><Message message={el.message} />);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                   {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;