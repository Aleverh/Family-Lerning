import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {publicRouts} from "./routes/routes";
import {useAuthState} from "react-firebase-hooks/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebaseinit/firebaseinit";


import {START_ROUTE, SITE_USER_ROUTE, ADMIN_ROUTE, PAPER_BASE_ROUTE} from "./consts/const";
// import StartPage from "./pages/startPage/StartPage";
// import RegisterPage from "./pages/registerPage/RegisterPage";
// import LoginPage from "./pages/loginPage/LoginPage";
import UserSitePage from "./pages/userSitePage/UserSitePage";
import AdminPage from "./pages/adminPage/AdminPage";
// import useUser from "./hooks/useUser";


// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line require-jsdoc
function PrivatePage(props) {
    // const auth = getAuth();
    // const use = auth.currentUser;
    // console.log(use);

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     console.log(uid);
    //   }
    // });

    const [user, loading] = useAuthState(auth);
    if (loading) return null;
    if (!user) {
        return <Navigate to={ START_ROUTE }></Navigate>;
    }
    // eslint-disable-next-line react/prop-types
    return props.children;
}

// eslint-disable-next-line require-jsdoc
function PublicPage(props) {
    const [user, loading] = useAuthState(auth);
    if (loading) return null;
    if (user) {
        return <Navigate to={ user.email != "admin@test.test" ? SITE_USER_ROUTE : ADMIN_ROUTE }></Navigate>
        // return <Navigate to={ PAPER_BASE_ROUTE }></Navigate>;
    }
    // eslint-disable-next-line react/prop-types
    return props.children;
}

const AppRouter = () => {
    return (
        <Routes>
            <Route path={ SITE_USER_ROUTE } element={<PrivatePage><UserSitePage/></PrivatePage>} ></Route>
            <Route path={ ADMIN_ROUTE } element={<PrivatePage><AdminPage/></PrivatePage>} ></Route>
            { publicRouts.map(({path, Component}) =>
                <Route key={path} path={path} element={<PublicPage><Component/></PublicPage>}></Route>,
            )
            }
        </Routes>
    );
};
export default AppRouter;


{/* <Route path={ LOGIN_ROUTE } element={<LoginPage/>}></Route>
<Route path={ REGISTER_ROUTE } element={<RegisterPage/>}></Route>
<Route path={ START_ROUTE } element={<StartPage/>}></Route>
<Route path={ SLASH_ROUTE } element={<StartPage/>}></Route> */}
{/* <Route path={ LOGIN_ROUTE } element={<PublicPage><LoginPage/></PublicPage>}></Route>
<Route path={ REGISTER_ROUTE } element={<PublicPage><RegisterPage/></PublicPage>}></Route>
<Route path={ START_ROUTE } element={<PublicPage><StartPage/></PublicPage>}></Route>
<Route path={ SLASH_ROUTE } element={<PublicPage><StartPage/></PublicPage>}></Route> */}
