"use client";
import Navbar from "@/Components/shared/Navbar";
import cover from "../../assets/profiles/service.jpeg";
import logo from "../../assets/profiles/softronixs.jpeg";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Ratings from "@/Components/Ratings/Ratings";
import { useState } from "react";
import Container from "@/Components/Container";
import Reviews from "@/Components/SingleProfile/Reviews";
import Introduction from "@/Components/SingleProfile/Introduction";
import Contact from "@/Components/SingleProfile/Contact";

const SingleService = () => {
  const [state, setState] = useState("introduction");

  return (
    <div>
      <Navbar />

      {/* headers */}
      <div>
        <div className="px-6 border-b-2 relative md:px-14 lg:px-20 py-4 md:py-5 lg:py-7">
          <div
            className="bg-cover relative w-full bg-center h-[150px] md:h-[190px] lg:h-[220px] rounded-lg"
            style={{
              backgroundImage: `url('https://shorturl.at/suTZ2')`,
              backgroundSize: "cover",
            }}
          ></div>

          <div className=" flex flex-col lg:flex-row flex-wrap pl-8 gap-3 lg:gap-5">
            <div className="ml-  w-ful lg:w-[12%] bloc mx-auo -mb-16">
              <Image
                className="border-2 relative -mb-16  shadow-md border-slate-300 rounded-full h-[120px] lg:h-[165px] w-[120px] lg:w-[165px]"
                src={logo}
                height={80}
                width={120}
                alt="logo"
              />
            </div>

            <div className="space-y-2 w-[86%]  lg:mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 lg:gap-4">
                  <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">
                    AllianceTek
                  </h2>
                  <span>
                    <GoVerified className="text-xl text-[#00A1FF]" />
                  </span>
                </div>
              </div>

              <p className="text-slate-700 font-normal text-[20px]">
                Empowering IT Solutions
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1 items-center">
                  <Ratings ratings={5} />
                </div>
                <p className="text-slate-700 font-normal text-[18px]">
                  19 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* headers tab */}
      <Container>
        {/* tabs */}
        <div className=" max-w-xl mx-auto">
          <div className="flex flex-wrap gap- font-semibold -tracking-tighter cursor-pointer text-[#000000] text-[18px] lg:text-[19px] justify-between py-2 items-center text-enter ">
            <span
              className={`${
                state === "introduction"
                  ? "text-primary border-b-2 border-primary py-1 duration-300"
                  : ""
              }`}
              onClick={() => setState("introduction")}
            >
              Introduction
            </span>

            <span>Products</span>

            <span
              className={`${
                state === "contact"
                  ? "text-primary border-b-2 border-primary py-1 duration-300"
                  : ""
              }`}
              onClick={() => setState("contact")}
            >
              Contact
            </span>

            <span
              className={`${
                state === "reviews"
                  ? "text-primary border-b-2 border-primary py-1 inline-block duration-300"
                  : ""
              }`}
              onClick={() => setState("reviews")}
            >
              Review
            </span>
          </div>
        </div>

        {/* tab content */}

        {state === "introduction" && (
          <div className="py-3 ">
            <Introduction />
          </div>
        )}

        {state === "reviews" && (
          <div className="py-3 ">
            <Reviews />
          </div>
        )}

        {state === "contact" && (
          <div className="py-3 ">
            <Contact />
          </div>
        )}
      </Container>
    </div>
  );
};

export default SingleService;
