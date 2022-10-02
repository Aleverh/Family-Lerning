// import React from "react";
// // import { Routes, Route, Navigate} from 'react-router-dom';
// import { Switch, Route, Redirect} from 'react-router-dom';
// import { privateRouts, publicRouts } from "../routes/routes";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebaseinit/firebaseinit";

// import { LOGIN_ROUTE } from "../consts/consts";
// import { CHAT_ROUTE } from "../consts/consts";
// import { SLASH_ROUTE } from "../consts/consts";

// import PageChat from "../pages/PageChat";
// import PageLogin from "../pages/PageLogin";

// // function PrivateRoute(props){
// //    const [user, loading] = useAuthState(auth);
// //    console.log(user);
// //    if(loading) return null
// //    if (user) 
// //       return <Route {...props}></Route> 
//    // return  <Redirect to={LOGIN_ROUTE}></Redirect>


//    function PrivatePage (props) {
//       const [user, loading] = useAuthState(auth);
//       console.log(user);
//       if(loading) return null
//       if(!user) {
//          return <Redirect to={LOGIN_ROUTE}></Redirect>
//       }
//       return   <Route {...props}></Route> 
//    }
//    function PublicPage (props) {
//       const [user, loading] = useAuthState(auth);
//       console.log(user);
//       if(loading) return null
//       if(user) {
//          return <Redirect to={CHAT_ROUTE}></Redirect>
//       }
//       return <Route {...props}></Route> 
//    }

// const AppRouter = () => {
//    return(
//       <Switch>
//          <PrivatePage path={CHAT_ROUTE} component={PageChat} exact></PrivatePage> 
//          {  publicRouts.map(({path, Component}) => 
//                <PublicPage key={path}   path={path} component={Component} exact={true}></PublicPage>
//             )
//          }  
//          {/* <PrivateRoute path={CHAT_ROUTE} element={<PageChat/>} exact={true}></PrivateRoute>  */}
//       </Switch>
//    )

// }
// export default AppRouter;