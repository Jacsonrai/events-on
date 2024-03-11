import React from "react";
import LoginIcon from "../customicon/loginIcon";
import { Link } from "react-router-dom";

const EVNavBar = () => {
  return (
    <div className="absolute z-[1000] top-7 flex justify-center w-full">
      <div className="border w-full flex items-center justify-between  ml-20 mr-20 bg-white rounded-2xl p-2 shadow-md">
        <div>
          <input
            className="  min-h-[3rem] min-w-[20rem] pl-2 outline-0 rounded-[2rem] border pr-2"
            placeholder="search"
          />
        </div>
        <div className="flex gap-2">
          <Link to={"/login"}>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
              <LoginIcon height={20} width={20} />
              <p>Login</p>
            </div>
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
            <LoginIcon height={20} width={20} />
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVNavBar;
