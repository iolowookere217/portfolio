import React from "react";
import Image from "next/image";
("useclient");
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-5 place-self-center mt-4 md:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
            <Image
              className="rounded-full w-[200px] h-[200px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/isaac.jpg"
              alt="hero image"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white  mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            Isaac
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md:text-xl  mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            dolores reprehenderit molestiae odio officiis repellendus, quaerat
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white ">
              <span className="block bg-black hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full px-5 py-1">
                Hire Me
              </span>
            </button>
            <button className="px-5 py-1.5 w-full sm:w-fit rounded-full bg-transparent hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border-2 border-white mt-3">
              View CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
