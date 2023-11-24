import { updatePassword } from 'firebase/auth';
import { auth } from '../firebase/index';

const changePassword = (newPassword) => {
    updatePassword(auth.currentUser, `${newPassword}`);
};
export default changePassword;
