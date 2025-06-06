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
    <div>
      <div className=" py-5 mx-auto mt-[60px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl text-center p-5">Password Reset Request</h2>
        <div className="w-[400px] rounded-2xl bg-[#d2e3f4] h-[230px] mx-auto min-h-min p-5">
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
