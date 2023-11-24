import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import addUserInfo from './addUserInfo';

const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            addUserInfo(data.user, data.user.displayName, 'Client');
        });
};
export default registerWithGoogle;
