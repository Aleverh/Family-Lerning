import {Navigate} from "react-router-dom"
import {useAuthState} from "react-firebase-hooks/auth";
import PacmanLoader from "react-spinners/PacmanLoader"
import {auth} from "../firebase";
const ProtectedRoute = ({
        redirectPath = '/login',
        children,
    }) => {
    const [user, loading] = useAuthState(auth);

    if (loading){
        return <PacmanLoader color="#36d7b7"/>
    }

    if (!user){
        return <Navigate to={redirectPath} replace />;
    }

    return children;

}
export default ProtectedRoute
