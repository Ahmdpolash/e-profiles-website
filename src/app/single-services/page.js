"use client";
import Container from "@/Components/Container";
import Footer from "@/Components/shared/Footer";
import Navbar from "@/Components/shared/Navbar";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import image1 from "../../assets/Rectangle 3843.png";
import image2 from "../../assets/Frame 611 (1).png";
import image3 from "../../assets/Frame 611.png";
import Image from "next/image";

const images = [image1, image2, image3];

const page = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-3 lg:my-4">
          <div className="space-y-1 lg:space-y-2">
            <h1 className="text-[#000000] font-medium text-xl lg:text-3xl">
              I will be full stack web and software developer build applications
            </h1>
            <div className="flex items-center gap-3">
              <FaStar className="text-xl text-[#FFAD33]" />
              <p className="text-[#111111] font-semibold text-[18px]">5.0</p>
              <p className="text-slate-500 text-[18px]">(50)</p>
              <p className="text-slate-500 flex items-center gap-1 text-[18px]">
                <IoCartOutline className="text-xl" /> 60 sales
              </p>
            </div>
          </div>

          {/* slider */}

          <section className="my-4 lg:my-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 ">
              
              <div className="col-span-3 w-full">
                <div className=" h-[210px] w-full  ml-3 lg:ml-0 md:h-[290px] lg:h-[450px]   overflow-hidden  border-2 border-gray-100  rounded-xl">
                  <Image
                    height={250}
                    width={550}
                    className="h-full  w-full object-cover "
                    src={currentImage}
                    alt="Service Image"
                  />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ml-4 lg:ml-0 gap-4 lg:gap-3   my-3">
                  {images?.map((image) => (
                    <button
                      onClick={() => setCurrentImage(image)}
                      className={`w-full border  ${
                        currentImage === image && "border border-orange-500"
                      } rounded-lg`}
                      key={image}
                    >
                      <Image
                        height={100}
                        width={100}
                        className="w-[100px] lg:w-full md:mx-auto md:text-center p-2   md:h-28 rounded-lg"
                        src={image}
                        alt="service image"
                      />
                    </button>
                  ))}
                </div>
              </div>


              <div className="col-span-1 border h-52 w-full"></div>
            </div>
          </section>
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default page;
