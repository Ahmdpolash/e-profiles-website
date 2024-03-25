import Navbar from "@/Components/shared/Navbar";
import cover from "../../assets/profiles/service.jpeg";
import logo from "../../assets/profiles/softronixs.jpeg";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Ratings from "@/Components/Ratings/Ratings";
import user1 from "../../assets/profiles/user-1.png";
import { IoLocationOutline } from "react-icons/io5";
import { GoLink } from "react-icons/go";

import facebook from "../../assets/profiles/facebook.png";
import linkedin from "../../assets/profiles/linkedin.png";
import youtube from "../../assets/profiles/youtube.png";
import x from "../../assets/profiles/twitter.png";
import amazon from "../../assets/profiles/amazon.png";
import pinterest from "../../assets/profiles/Pinterest.png";
import reddit from "../../assets/profiles/Reddit.png";
import tumblr from "../../assets/profiles/Tumblr.png";
import vk from "../../assets/profiles/VK Logomark.png";
import github from "../../assets/profiles/GitHub Logotype.png";

import Container from "@/Components/Container";

import HeaderTabs from "@/Components/SingleProfile/HeaderTabs";
import Footer from "@/Components/shared/Footer";
import MidTabs from "@/Components/SingleProfile/MidTabs";

const image = [facebook, linkedin, youtube, x, amazon];

const SingleService = () => {
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

      <Container>
        {/* headers tab */}
        <HeaderTabs />

        {/* founders */}

        <div className="py-3 mt-3">
          <h2 className="text-primary inline-block tracking-wide border-b-2 border-primary py-1 font-semibold text-xl">
            Founders/Key Executives
          </h2>

          <div className="grid py-3 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="border">
                <div className="p-">
                  <div className=" bg-[#F5F5F5]">
                    <Image
                      className="p-4 w-full"
                      src={user1}
                      height={120}
                      width={150}
                      alt="user"
                    />
                  </div>
                  <div className="space-y-1 px-3 py-2">
                    <h2 className="font-bold text-[16px] text-[#000000]">
                      Robert D. Caldwell
                    </h2>
                    <h3 className="font-medium text-[15px] text-[#000000]">
                      Graphics designer
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-x-1">
                        <Ratings ratings={5} />
                      </div>
                      <p className="text-slate-500">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mid tabs */}

        <MidTabs />

        {/* contact */}
        <div className="my-3 pt-2">
          <h2 className="font-bold text-[#000000] text-xl py-2">Contact</h2>
          <h3 className="flex  text-[#000000] text-[18px] items-center gap-2">
            <IoLocationOutline className="text-primary text-xl" />
            Location
          </h3>

          <div className="border border-[#000000] mt-3 inline-block rounded-md p-4 space-y-2">
            <h3 className="font-semibold">United States</h3>
            <p className="text-[#000000] font-normal">
              5 Great Valley Parkway Suite 210, Malvern, Pennsylvania 19355
            </p>
          </div>

          {/* social */}

          <div className="pt-5 lg:pt-7 py-5">
            <h3 className="flex  text-[#000000] text-[18px] items-center gap-2">
              <GoLink className="text-primary text-xl font-normal" />
              Social links
            </h3>

            <div className="grid mt-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={facebook}
                  height={70}
                  width={110}
                  alt="facebook"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={linkedin}
                  height={70}
                  width={110}
                  alt="linkedin"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={youtube}
                  height={70}
                  width={100}
                  alt="youtube"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image className="" src={x} height={70} width={60} alt="x" />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={amazon}
                  height={70}
                  width={110}
                  alt="amazon"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={pinterest}
                  height={70}
                  width={100}
                  alt="pinterest"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={reddit}
                  height={70}
                  width={80}
                  alt="reddit"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={tumblr}
                  height={70}
                  width={90}
                  alt="tumblr"
                />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image className="" src={vk} height={70} width={40} alt="vk" />
              </div>

              <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[85px] shadow-red-300/45">
                <Image
                  className=""
                  src={github}
                  height={70}
                  width={120}
                  alt="github"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SingleService;
