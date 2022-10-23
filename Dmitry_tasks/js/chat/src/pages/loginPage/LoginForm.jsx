import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Link } from 'react-router-dom'
import signIn from "./components/login";
const LoginPage = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.email !== "" && data.password !== "")
        signIn(data.email, data.password)
    }
    return (
        <div className="login-form-container" >
            <span className="logo">Chat App</span>
            <span className="title">Login</span>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} className="form-input" placeholder="email" type="email" />
                <Input {...register("password")} className="form-input" placeholder="password" type="password" />
                <Button text="Sign In"/>
            </form>
            <p className="login-text">You don't have an account?<Link to="/register"> Register</Link></p>
        </div>
    )
}
export default LoginPage