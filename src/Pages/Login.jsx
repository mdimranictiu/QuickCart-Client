import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const {SignInAccount}=useContext(AuthContext)
  const [passwordShow, SetpasswordShow] = useState(false);
  const Icon = passwordShow ? FaRegEye : FaRegEyeSlash;
  const handlePasswordShow = () => {
    SetpasswordShow(!passwordShow);
  };
  const navigate=useNavigate()
  const {
          register,
          handleSubmit,
          watch,
          formState: { errors },reset,
        } = useForm()
  
        const  onSubmit=(data)=>{
          const email= data?.email;
          const password= data?.password;
          console.log(email,password)
          SignInAccount(email,password)
          .then((res)=>{
            console.log(res?.data)
            navigate('/')
          })
          .error((error)=>{
            console.log(error?.message)
          })
          reset();
        }
  return (
    <div className="w-[80%]  mx-auto">
      <div className="breadcrumbs mt-10 text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Account</a>
          </li>
          <li>Login</li>
        </ul>
      </div>
      <div className=" py-5 mx-auto mt-[0px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl max-sm:text-xl text-center py-5">Login Account</h2>
        <div className="w-[400px] mx-auto min-h-min p-5 max-sm:w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full">
              <label className="label mt-3 ">Email/ Phone</label>
              <input {...register('email',{required:true})}
                className="input  outline-none hover:border-none w-full px-5"
                type="text"
                placeholder="Email/ Phone"
              />
            </div>
            <div className="flex justify-between mt-3 w-full">
              <label className="label ">Password</label>
              <p className="text-sm text-[#EF4A57] hover:underline">
                <Link to="/account/forgot-password">Forgoten Password?</Link>
              </p>
            </div>
            <div className="relative">
              <input
                className="input outline-none hover:border-none w-full px-5"
                type={passwordShow ? "text" : "password"}
                placeholder="Password" {...register("password",{required:true})}
              />
              <Icon
                onClick={handlePasswordShow}
                className="absolute -mt-7 right-5"
              />
            </div>
            <div className="mt-10">
              <button type="submit" className="btn w-full bg-[#4bc5e6] text-[16px] text-white duration-300 hover:bg-[#00BADB]">
                Login
              </button>
            </div>
            <div className="divider w-full my-6">Don't have an account?</div>
          </form>
          <div className="my-3">
            <Link to="/account/register">
              <button className="btn w-full  text-[16px] text-black border-2 duration-300 hover:text-white outline-none hover:bg-[#00BADB]">
                Create Your Account
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
