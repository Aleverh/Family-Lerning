import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRouts, publicRouts } from "../routes/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseinit/firebaseinit";

import { LOGIN_ROUTE } from "../consts/consts";
import { CHAT_ROUTE } from "../consts/consts";
import { SLASH_ROUTE } from "../consts/consts";
import PageChat from "../pages/PageChat";

   function PrivatePage (props) {
      const [user, loading] = useAuthState(auth);
      if(loading) return null
      if(!user) {
         return <Navigate to={LOGIN_ROUTE}></Navigate>
      }
      return props.children
   }
   function PublicPage (props) {
      const [user, loading] = useAuthState(auth);
      if(loading) return null
      if(user) {
         return <Navigate to={CHAT_ROUTE}></Navigate>
      }
      return props.children
   }

const AppRouter = () => {
   return(
      <Routes>
         {  publicRouts.map(({path, Component}) => 
               <Route  key={path}  path={path} element={<PublicPage><Component/></PublicPage>} exact={true}></Route>
            )
         }  
         <Route path={CHAT_ROUTE} element={<PrivatePage><PageChat/></PrivatePage>} exact></Route> 
      </Routes>
   )

}
export default AppRouter;