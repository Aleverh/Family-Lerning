import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const useAuth = () => {
    const [user, loading, error] = useAuthState(auth);
    const [dbUser, setDBUser] = useState(null);
    const [dbError, setDbError] = useState(undefined);
    const [dbLoading, setDbLoading] = useState(false);
    useEffect(() => {
        setDbLoading(true);
        if (user) {
            const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (docs) => {
                if (docs.data() !== undefined) {
                    setDBUser(docs.data());
                    setDbLoading(false);
                } else {
                    setDbLoading(false);
                    setDbError(docs);
                }
            });
            return () => unsubscribe();
        }
        setDbLoading(false);
    }, [user?.uid]);
    return [
        { ...user, ...dbUser },
        loading || dbLoading,
        error || dbError,
    ];
};
export default useAuth;
