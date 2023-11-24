import React from "react";
import camera from "../../../images/Camera.png";
import person from "../../../images/AddPerson.png";
import points from "../../../images/3 points.png";
import RenderMessages from "./renderMessages";
import SendingMessage from "./sendMessage";

const Chat = ({ currentUser, user }) => {
    return(
        <div className="chat">
            <div className="chat-info">
                <div className="user-name">{user?.displayName}</div>
                <div className="icons">
                    <img alt="camera icon" width="24px" height="24px" src={camera}/>
                    <img alt="person icon" width="24px" height="24px" src={person}/>
                    <img alt="three points" width="24px" height="24px" src={points}/>
                </div>
            </div>
            <div className="massages">
                <RenderMessages currentUser={currentUser} user={user}/>
            </div>
            <SendingMessage user={user} currentUser={currentUser}/>
        </div>
    )
}
export default Chat