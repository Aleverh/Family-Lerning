import React, {useEffect, useState} from "react";
import chatSubscriber from "../../../api/chatPage/chatSubscriber";
const ExistChats = ({ setUser, elem }) => {
    const [lastMessage, setLastMessage] = useState();
    useEffect(() => {
        chatSubscriber(elem, setLastMessage)
    }, [elem]);
    const handleSelect = () => {
        setUser(elem)
    };
    return(
        <div onClick={handleSelect} className="chats">
            <img width="50px" height="50px" alt="logo" className="user-img" src={elem.photoUrl}/>
            <div className="chats-text-box">
                <span className="chats-userName">{elem.displayName}</span>
                <span className="chats-lastMessage">{lastMessage}</span>
            </div>
        </div>
    )
}
export default ExistChats