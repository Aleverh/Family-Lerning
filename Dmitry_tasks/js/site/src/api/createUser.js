import { createUserWithEmailAndPassword } from 'firebase/auth';
import addUserInfo from './addUserInfo';

const createUser = (auth, email, password, displayName, secretKey) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            return userCredential.user;
        })
        .then((user) => addUserInfo(user, displayName, secretKey));
};
export default createUser;
