import React, {useState, useEffect} from "react";
import ExistChats from "./existChats";
import subscriber from "../../../api/chatPage/chatPreviewSubscriber";
import useAuth from "../../../hooks/useAuth";
const useUserChats = (id) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const unsub = subscriber(setUsers, id);
        return () => unsub();
    }, [id])
    return users;
}

const RenderExistUserChats = ({ setUser }) => {
    const [user] = useAuth();
    const users = useUserChats(user.uid);
    return (
        <div>
            {users.map(elem => (
                <ExistChats key={elem.id} elem={elem} setUser={setUser}/>
            ))}
        </div>
    )
}
export default RenderExistUserChats;