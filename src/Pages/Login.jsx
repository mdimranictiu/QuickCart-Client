import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordShow, SetpasswordShow] = useState(false);
  const Icon = passwordShow ? FaRegEye : FaRegEyeSlash;
  const handlePasswordShow = () => {
    SetpasswordShow(!passwordShow);
  };
  return (
    <div>
      <div className=" py-5 mx-auto mt-[60px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl text-center p-5">Login Account</h2>
        <div className="w-[400px] mx-auto min-h-min p-5">
          <form action="">
            <div className="flex flex-col w-full">
              <label className="label mt-3 ">Email/ Phone</label>
              <input
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
                placeholder="Password"
              />
              <Icon
                onClick={handlePasswordShow}
                className="absolute -mt-7 right-5"
              />
            </div>
            <div className="mt-10">
              <button className="btn w-full bg-[#4bc5e6] text-[16px] text-white duration-300 hover:bg-[#00BADB]">
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
