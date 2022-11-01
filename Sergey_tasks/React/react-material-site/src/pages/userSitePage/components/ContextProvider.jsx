import React from "react";
import Context from "./context";
// import useUser from './hooks/useUser';
import useUser from "../../../hooks/useUser";

import Com1 from "./Com1";
import Com2 from "./Com2";
import Com3 from "./Com3";
import HeaderUserSite from "./HeaderUserSite";

function ContextProvider() {
    const authUser = useUser();
    // console.log(authUser);

    const value = {
    };

    return (
        <Context.Provider value={value}>
            <HeaderUserSite authUser={authUser}></HeaderUserSite>
            <Com1/>
            <Com2/>
            <Com3/>
        </Context.Provider>
    );
}
export default ContextProvider;
