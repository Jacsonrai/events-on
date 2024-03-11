import React from "react";

const Login = () => {
  return (
    <div className=" bg-gray-800">
      <div className="flex items-center justify-center h-[100vh] mx-2 lg:mx-[5rem]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-[50rem] max-h-[50rem] w-full">
          <div className="hidden lg:flex relative">
            <figure>
              <img
                src="/event.jpg"
                alt=""
                className="rounded-l-xl min-h-[50rem] max-h-[50rem] opacity-[0.9]"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col text-center justify-center bg-black bg-opacity-40 rounded-md p-2  text-white text-[2rem] capitalize">
              <h6 className="mb-[10rem]">
                Welcome to Nepal first Event Platform
                <br />
                Lets Rock Tonight
              </h6>
            </div>
          </div>
          <div className=" bg-black">
            <p>right content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
