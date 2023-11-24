import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
};
export default loginWithGoogle;
