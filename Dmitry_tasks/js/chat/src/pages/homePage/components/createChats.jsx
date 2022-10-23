import React from "react";
import setChats from "../../../api/chatPage/createChats";
const CreateChats = ({ currentUser, users }) => {
    if(!users){
        return
    }
    return users.map(elem => {
        return (
            <div id="findedUser" key={elem.id} onClick={() => setChats(elem, currentUser)} className="chats">
                <img width="50px" height="50px"  alt="logo" className="user-img" src={elem.photoUrl}/>
                <div className="chats-text-box">
                    <span className="chats-userName">{elem.displayName}</span>
                    <span className="chats-lastMessage">{elem.lastMessage}</span>
                </div>
            </div>
        )
    })

}
export default CreateChats