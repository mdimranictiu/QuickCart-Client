import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {CreateAccount} =useContext(AuthContext)
  const [passwordShow, SetpasswordShow] = useState(false);
  const Icon = passwordShow ? FaRegEye : FaRegEyeSlash;
  const handlePasswordShow = () => {
    SetpasswordShow(!passwordShow);
  };
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
        CreateAccount(email,password)
        .then((res)=>{
          console.log(res?.data)
        })
        .error((error)=>{
          console.log(error?.message)
        })
        reset();
      }
  return (
       <div className="w-[80%] mx-auto">
      <div className="breadcrumbs mt-10 text-sm">
  <ul>
    <li><a>Home</a></li>
    <li><a>Account</a></li>
    <li>Register</li>
  </ul>
</div>
      <div className=" py-5 mx-auto mt-[0px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl max-sm:text-xl text-center py-5">Register Account</h2>
        <div className="w-[400px] max-sm:w-full mx-auto min-h-min p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              <div className="flex flex-col w-full">
                <div>
                  <label className="label mt-3 ">First Name</label>
                  <span className="text-red-600">*</span>
                </div>
                <input {...register('fname',{required:true})} className="input  outline-none hover:border-none w-full px-5"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col w-full">
                <div>
                  <label className="label mt-3 ">Last Name</label>
                  <span className="text-red-600">*</span>
                </div>{" "}
                <input {...register('lname',{required:true})}
                  className="input outline-none w-full px-5 hover:border-none"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>
                <label className="label mt-3 ">Email</label>
                <span className="text-red-600">*</span>
              </div>{" "}
              <input {...register('email',{required:true})}
                className="input  outline-none hover:border-none w-full px-5"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col w-full">
              <div>
                <label className="label mt-3 ">Phone</label>
                <span className="text-red-600">*</span>
              </div>{" "}
              <input
                className="input  outline-none hover:border-none w-full px-5"
                type="number" {...register('phone',{required:true})}
                placeholder="Phone"
              />
            </div>
            <div className=" w-full">
              <div>
                <label className="label mt-3 ">Password</label>
                <span className="text-red-600">*</span>
              </div>{" "}
            </div>
            <div className="relative">
              <input {...register("password", {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: "Password must include uppercase, lowercase, and a number",
            },
          })}
                className="input outline-none hover:border-none w-full px-5"
                type={passwordShow ? "text" : "password"}
                placeholder="Password"
              />
              <Icon
                onClick={handlePasswordShow}
                className="absolute -mt-7 right-5"
              />
            </div>
                {errors.password && (
  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
            <div className="mt-10">
              <button type="submit" className="btn w-full bg-[#4bc5e6] text-[16px] text-white duration-300 hover:bg-[#00BADB]">
                Register
              </button>
            </div>
            <div className="divider w-full my-6">Already have an account?</div>
          </form>
          <div className="my-3">
            <Link to="/account/login">
              {" "}
              <button className="btn w-full  text-[16px] text-black border-2 duration-300 hover:text-white outline-none hover:bg-[#00BADB]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
