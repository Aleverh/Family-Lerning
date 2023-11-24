import React, {useState} from "react";
import Logout from "./components/logout";
import CreateChats from "./components/createChats";
import ExistUserChats from "./components/renderExistUserChats";
import Chat from "./components/setChat";
import useAuth from "../../hooks/useAuth";
import Form from "./components/form";
import PacmanLoader from "react-spinners/PacmanLoader";
const ChatPage = () => {
    const [users, setUsers] = useState(null);
    const [currentUser, loading, error] = useAuth();
    const [user, setUser] = useState(null);

    if (currentUser.displayName)
        if (loading)
            return <PacmanLoader loading={loading}/>
    return (
        <div className="chat-container">
            <div className="sidebar">
                <div className="nav">
                    <div className="chat-logo">Chat App</div>
                    <div className="user-info">
                        <img alt="photo" className="user-img" src={currentUser.photoUrl} height="24px" width="24px" />
                        <div className="user-name">{currentUser.displayName}</div>
                        <Logout/>
                    </div>
                </div>
                <Form currentUser={currentUser} setUsers={setUsers}/>
                <CreateChats currentUser={currentUser} users={users}/>
                <ExistUserChats setUser={setUser}/>
            </div>
            <Chat currentUser={currentUser} user={user}/>
        </div>
    )
}
export default ChatPage