"use client";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import men from "../,,/../../assets/Login/character.png";
import blob1 from "../,,/../../assets/Login/blob1.png";
import blob2 from "../,,/../../assets/Login/blob2.png";
import blob3 from "../,,/../../assets/Login/blob3.png";
import facebook from "../../assets/Login/facebook.png";
import google from "../../assets/Login/google.svg";
import linkedin from "../../assets/Login/linkedin.svg";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative  px-5 lg:px-20 py-3 lg:py-6 w-full bg-primary-foreground">
      {/* blob */}

      <div>
        {/* blob-one */}
        <Image
          className="absolute left-0 bottom-0 w-ful h-ful"
          src={blob1}
          height={10}
          width={355}
          alt="blob1"
        />

        {/* blob-two */}

        <Image
          className="absolute translate-[360deg] right-[290px] top-10 w-ful h-ful"
          src={blob2}
          height={120}
          width={95}
          alt="blob2"
        />
        {/* blob-three */}

        <Image
          className="absolute  bottom-10 right-1 w-ful h-ful"
          src={blob3}
          height={120}
          width={110}
          alt="blob3"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="py-4 lg:py-2">
          <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
            <div className="w-full order-2 mb-8 lg:mb-0 lg:order-1 z-50  h-full">
              {/* logo */}
              <div className="pb-5 flex justify-center gap-1 items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1 border-2 border-orange rounded-lg">
                    <Image
                      className="mx-auto "
                      src={logo}
                      height={18}
                      width={22}
                      alt="logo"
                    />
                  </div>
                  <h3 className="font-medium text-[20px] text-left text-dark">
                    eProfiles
                  </h3>
                </div>
              </div>

              {/* FORM FIELD START HERE */}

              <div className="bg-white rounded-xl border border-slate-300 h-[540px w-full p-10">
                <h1 className="font-bold text-dark text-[22px]">Signup</h1>
                <h3 className="font-normal text-dark text-[17px]">
                  to get started
                </h3>

                <div className="mt-3 md:mt-4 lg:mt-6">
                  <form className="relative">
                    <div className="flex flex-col lg:flex-row items-center gap-x-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                    />
                    <input
                      type="date"
                      placeholder="Date of birth"
                      name="email"
                      className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                    />

                    <select className="px-3 text-slate-700 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500">
                      <option>Choose your country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>

                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="px-3 py-3 rounded-md w-full border-2 mb-2 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />

                      {/* eye icon */}
                      <span
                        onClick={() => setOpen(!open)}
                        className="absolute text-[19px] right-3 top-[17px]"
                      >
                        {open ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>
                    {/* Pass Input field */}

                    <div className="relative">
                      <input
                        type={open ? "text" : "password"}
                        placeholder="Confirm password"
                        name="confirm-password"
                        className="px-3 relative py-3 rounded-md w-full border-2 mb-2 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />
                      {/* eye icon */}
                      <span
                        onClick={() => setOpen(!open)}
                        className="absolute text-[19px] right-3 top-[17px]"
                      >
                        {open ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>

                    {/* checkbox */}

                    <div className="flex mb-1 pl-1 items-center gap-2">
                      <input
                        className="h-[15px] w-[15px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <h3 className="text-[14px] text-lightDark">
                        Agree to Our terms and Conditions
                      </h3>
                    </div>

                    <div className="flex pl-1 items-center gap-2">
                      <input
                        className="h-[15px] w-[15px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <h3 className="text-[14px] text-lightDark">
                        Do you want subscription email?
                      </h3>
                    </div>

                    <div className="mt-5 md:mt-6 lg:mt-8">
                      <button
                        className="py-3 w-full font-medium bg-primary text-white rounded-lg"
                        type="submit"
                      >
                        Continue
                      </button>

                      <h3 className="text-lightDark my-2 font-normal pt-4 text-center text-[15px]">
                        Already registered?{" "}
                        <Link
                          className="font-semibold text-orange"
                          href="/login"
                        >
                          Login
                        </Link>{" "}
                      </h3>

                      <div className="flex w-full items-center gap-3 py-2 text-[15px] text-slate-500">
                        <div className="h-[.5px] w-full bg-[#000000]"></div>
                        or
                        <div className="h-[.5px] w-full bg-[#000000]"></div>
                      </div>

                      {/* social icon */}

                      <div className="flex items-center gap-4 justify-center mt-2 flex-wrap">
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <Image
                            className="max-w-[30px]"
                            height={30}
                            width={30}
                            src={google}
                            alt="Google"
                          />
                        </button>
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <Image
                            height={30}
                            width={30}
                            alt="facebook"
                            className="max-w-[30px]"
                            src={facebook}
                          />
                        </button>
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <Image
                            height={30}
                            width={30}
                            alt="linkedin"
                            className="max-w-[28px]"
                            src={linkedin}
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full order-1 lg:order-2 mt-20   h-full p-4">
              <Image height={480} width={474} src={men} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
