import React from "react";
import getUsers from "../../../api/chatPage/getUsers";
import {useForm} from "react-hook-form";
const Form = ({currentUser, setUsers}) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        if (data.userName !== "") {
            const querySnapshot = await getUsers(data.userName);
            const findUser = querySnapshot.docs;
            const test = findUser.map(elem => elem.data()).filter(elem => elem.id !== currentUser.uid);
            console.log(test);
            setUsers(test);
            reset()
        }
    }
    return(
        <form className="find-user-form" onSubmit={handleSubmit(onSubmit)}>
            <input autoComplete='off' {...register("userName")} placeholder="Find a user" className="find-user"/>
        </form>
    )
}
export default Form