import {Navigate} from "react-router-dom"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
import PacmanLoader from "react-spinners/PacmanLoader";
const PublicRoute = ({
        redirectPath = '/chat',
        children,
    }) => {
    const [user, loading, error] = useAuthState(auth);
    if (loading){
        return <PacmanLoader color="#36d7b7"/>
    }
    if (user){
        return <Navigate to={redirectPath} replace />;
    }
    return children;
}
export default PublicRoute
