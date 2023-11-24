import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/index';

const addUserInfo = (user, name, role) => setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    id: user.uid,
    role,
    name,
});
export default addUserInfo;
