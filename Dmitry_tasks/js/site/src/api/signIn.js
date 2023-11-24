import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        })
        .catch(() => {
            alert('Something went wrong');
        });
};
export default signIn;
