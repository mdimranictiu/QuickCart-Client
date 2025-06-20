import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const ForgotPass = () => {
  const [passwordShow, SetpasswordShow] = useState(false);
  const Icon = passwordShow ? FaRegEye : FaRegEyeSlash;
  const handlePasswordShow = () => {
    SetpasswordShow(!passwordShow);
  };
  return (
    <div className="w-[80%] max-sm:w-full mx-auto">
        <div className="breadcrumbs mt-10 text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Account</a>
          </li>
          <li>Forgot Password</li>
        </ul>
      </div>
      <div className=" py-5 mx-auto mt-[30px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl text-center p-5">Password Reset Request</h2>
        <div className="w-[400px] max-sm:w-full rounded-2xl bg-[#d2e3f4] h-[230px] mx-auto min-h-min p-5">
          <form action="">
            <div className="flex flex-col w-full">
              <label className="label mt-3 ">Email</label>
              <input
                className="input  outline-none hover:border-none w-full px-5"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mt-3">
              <button className="btn w-full bg-[#4bc5e6] text-[16px] text-white duration-300 hover:bg-[#00BADB]">
                Password Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
