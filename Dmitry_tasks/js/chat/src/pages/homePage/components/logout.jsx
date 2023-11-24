import React from "react";
import {auth} from "../../../firebase";
import {signOut} from "firebase/auth";

const LogoutButton = () => {
    return (
        <button onClick={() => signOut(auth)} className="user-logout">logout</button>
    )
}
export default LogoutButton;
