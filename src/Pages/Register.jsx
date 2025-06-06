import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [passwordShow, SetpasswordShow] = useState(false);
  const Icon = passwordShow ? FaRegEye : FaRegEyeSlash;
  const handlePasswordShow = () => {
    SetpasswordShow(!passwordShow);
  };
  return (
    <div>
      <div className=" py-5 mx-auto mt-[30px] max-sm:mt-[20px] justify-center  items-center">
        <h2 className="text-2xl text-center p-5">Register Account</h2>
        <div className="w-[400px] mx-auto min-h-min p-5">
          <form action="">
            <div className="flex gap-10">
              <div className="flex flex-col w-full">
                <div>
                  <label className="label mt-3 ">First Name</label>
                  <span className="text-red-600">*</span>
                </div>
                <input
                  className="input  outline-none hover:border-none w-full px-5"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col w-full">
                <div>
                  <label className="label mt-3 ">Last Name</label>
                  <span className="text-red-600">*</span>
                </div>{" "}
                <input
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
              <input
                className="input  outline-none hover:border-none w-full px-5"
                type="text"
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
                type="number"
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
