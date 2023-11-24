import Grid2 from '@mui/material/Unstable_Grid2';
import {
    Typography, Modal, Button, Box,
} from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import DataController from './dataController';
import { changeType } from '../../../../components/redux/userInfo';
import changePassword from '../../../../api/changePassword';

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: '#FFFFFF',
    boxShadow: 24,
    p: 6,
};
function UserInfo() {
    const { handleSubmit, register, setValue } = useForm();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setValue('password', '');
        setValue('repeatPassword', '');
        setOpen(false);
    };
    const onSubmit = (data) => {
        if (data.password === data.repeatPassword) {
            changePassword(data.password);
            handleClose();
        } else {
            alert('Passwords not similar');
        }
    };
    return (
        <Grid2 margin="0 100px">
            <Grid2 display="flex" justifyContent="space-between">
                <Grid2 display="flex" alignItems="center" gap={2}>
                    <Typography variant="h5">My details</Typography>
                    <Typography
                        onClick={() => dispatch(changeType('edit'))}
                        style={{ color: '#1976d2', cursor: 'pointer', fontSize: '12px' }}
                        mt={1}
                        variant="p"
                    >
                        Edit data
                    </Typography>
                </Grid2>
                <Typography
                    onClick={handleOpen}
                    style={{ color: '#1976d2', cursor: 'pointer', fontSize: '12px' }}
                >
                    Change password
                </Typography>
                <Modal open={open} onClose={handleClose}>
                    <Grid2 sx={style}>
                        <Box component="form" display="flex" flexDirection="column" justifyContent="center" gap={3} onSubmit={handleSubmit(onSubmit)}>
                            <Typography variant="h6">Changing password</Typography>
                            <TextField {...register('password')} required placeholder="New password" type="password" />
                            <TextField {...register('repeatPassword')} required placeholder="Repeat new password" type="password" />
                            <Grid2 display="flex" justifyContent="space-around">
                                <Button variant="contained" type="submit">Ready</Button>
                                <Button variant="contained" onClick={() => handleClose()}>Cancel</Button>
                            </Grid2>
                        </Box>
                    </Grid2>
                </Modal>
            </Grid2>
            <DataController />
        </Grid2>
    );
}
export default UserInfo;
