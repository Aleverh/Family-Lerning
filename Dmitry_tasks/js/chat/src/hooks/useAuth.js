import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {doc, onSnapshot} from "firebase/firestore";

const useAuth = () => {
    const [user, loading, error] = useAuthState(auth);
    const [dbUser, setDBUser] = useState(null);
    const [dbError, setDbError] = useState(undefined);
    const [dbLoading, setDbLoading] = useState(true);

    useEffect(() => {
        setDbLoading(true);
        const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
            if (doc.data() !== undefined){
                setDBUser(doc.data());
                setDbLoading(false);
            } else {
                setDbLoading(false);
                setDbError(doc);
            }
        });

        return () => unsubscribe();

    }, [user.uid]);

    return [
        { ...user, ...dbUser },
        loading || dbLoading,
        error || dbError
    ];
};
export default useAuth