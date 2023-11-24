import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Button, TextField, Typography, Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { updateEmail } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import defaultAva from '../../../../images/avatar_default.jpg';
import useAuth from '../../../../components/Hooks/useAuth';
import updateUserInfo from '../../../../api/updateUserInfo';
import { auth } from '../../../../firebase';
import { selectCount, changeType } from '../../../../components/redux/userInfo';

function DataController() {
    const dispatch = useDispatch();
    const type = useSelector(selectCount);
    const [user] = useAuth();
    console.log(user);
    const [avatar, setAvatar] = useState(user.avatar ? user.avatar[0] : defaultAva);
    useEffect(() => {
        if (user.avatar) {
            setAvatar(user.avatar[0]);
        }
    }, [user.avatar]);
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => {
        if (data.email !== user.email) {
            updateEmail(auth.currentUser, data.email);
        }
        updateUserInfo(user.uid, data.email, data.name, data.image, data.telephone);
        dispatch(changeType('read'));
    };
    if (type === 'read') {
        return (
            <Grid2 display="flex" mt={4} gap={5}>
                <img style={{ borderRadius: '50%', width: '93px', height: '93px' }} src={avatar} alt="Add Avatar" />
                <Grid2>
                    <Grid2>
                        <Typography color="grey">Name</Typography>
                        <Typography variant="h6">{user.name}</Typography>
                    </Grid2>
                    <Grid2 mt={2}>
                        <Typography color="grey">Email</Typography>
                        <Typography variant="h6">{user.email}</Typography>
                    </Grid2>
                    <Grid2 mt={2}>
                        <Typography color="grey">Telephone number</Typography>
                        <Typography variant="h6">{user.telephone}</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        );
    }
    if (type === 'edit') {
        return (
            <Grid2 display="flex" mt={4} gap={5}>
                <Box component="form" display="flex" onSubmit={handleSubmit(onSubmit)}>
                    <Grid2 display="flex" flexDirection="column" alignItems="center" gap={1}>
                        <TextField
                            {...register('image')}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            name="image"
                            type="file"
                            onInput={(event) => setAvatar(URL.createObjectURL(event.target.files[0]))}
                        />
                        <label htmlFor="raised-button-file" style={{ margin: '0 auto', height: '200px' }}>
                            <Button
                                variant="raised"
                                component="span"
                                style={{
                                    display: 'flex', flexDirection: 'column', gap: 16,
                                }}
                            >
                                <img
                                    style={{ borderRadius: '50%', width: '93px', height: '93px' }}
                                    src={avatar}
                                    alt="Avatar"
                                />
                                <Grid2 style={{ border: '1px dashed #1976d2', padding: '10px' }}>
                                    <Typography fontSize={16}>Add photo</Typography>
                                    <Typography fontSize={13}>
                                        JPEG, JPG, SVG,
                                        <br />
                                        PNG
                                    </Typography>
                                </Grid2>
                            </Button>
                        </label>
                    </Grid2>
                    <Grid2>
                        <Grid2>
                            <Typography color="grey">Name</Typography>
                            <TextField
                                {...register('name')}
                                required
                                style={{ width: '300px' }}
                                width={300}
                                defaultValue={user.name}
                            />
                        </Grid2>
                        <Grid2 mt={2}>
                            <Typography color="grey">Email</Typography>
                            <TextField
                                {...register('email')}
                                required
                                type="email"
                                style={{ width: '300px' }}
                                defaultValue={user.email}
                            />
                        </Grid2>
                        <Grid2 mt={2}>
                            <Typography color="grey">Telephone number</Typography>
                            <TextField
                                {...register('telephone')}
                                style={{ width: '300px' }}
                                defaultValue={user.telephone}
                            />
                        </Grid2>
                        <Grid2 display="flex" gap={5}>
                            <Button
                                type="submit"
                                style={{ width: '130px', marginTop: 16 }}
                                variant="contained"
                            >
                                Save
                            </Button>
                            <Button
                                onClick={() => {
                                    if (avatar !== user.avatar[0]) {
                                        setAvatar(user.avatar[0]);
                                    }
                                    dispatch(changeType('read'));
                                }}
                                style={{ width: '130px', marginTop: 16 }}
                                variant="contained"
                            >
                                Cancel
                            </Button>
                        </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
        );
    }
}
export default DataController;
