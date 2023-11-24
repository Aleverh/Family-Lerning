import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

function upload(selectedFiles) {
    const files = Array.from(selectedFiles);

    return Promise.all(files.map((file) => {
        const storageRef = ref(storage, file.name);

        return uploadBytes(storageRef, file)
            .then((items) => getDownloadURL(items.ref));
    }));
}
export default upload;
