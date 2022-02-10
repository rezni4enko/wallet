import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import './Login.scss'

type FormData = {
   login: string;
   password: string;
}

const Login: React.FC = () => {

   const dispatch = useDispatch()

   const { register, handleSubmit } = useForm<FormData>();
   const onSubmit = (data: any) => {
      console.log(data)
      dispatch({
         type: 'LOGIN_USER',
         payload: data
      })
   };

   return <div className="login-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
         <input {...register("login")} placeholder='e-mail' />
         <input {...register("password")} placeholder='password' />
         <input type="submit" />
      </form>
   </div>
}

export default Login