import React from "react";
import registerPicture from "../../images/registerPicture.png"
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {auth} from "../../firebase";
import Button from "../../components/button/button";
import createUser from "../../api/registerPage/createUser";
const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.photoUrl[0]) {
            const selectedFile = data.photoUrl[0];
            createUser(data, auth, data.email, data.password, selectedFile)
        }
    };
    console.log(errors);
    return (
        <div className="register-form-container">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("displayName", { required: true })} className="form-input" placeholder="display name"/>
                    <input {...register("email", { required: true })} className="form-input" placeholder="email"/>
                    <input {...register("password", { required: true })} type="password" className="form-input" placeholder="password"/>
                    <div className="add-avatar">
                        <input type="file" {...register("photoUrl")} className="inpForAva" multiple/>
                        <label className="add-avatar-label">
                            <span>
                                <img alt="spd" width="32px" height="32px" src={registerPicture}/>
                            </span>
                            <span className="add-avatar-text">Add an avatar</span>
                        </label>
                    </div>
                    <Button text="Sign Up"/>
                </form>
            <p className="register-text">You do have an account?<Link to="/login">Login</Link></p>
        </div>
    )
}
export default RegisterPage