import React from "react";
import Image from "./Image";


import heroImg from "../assets/ezyswap-mobile-app.png";

const Hero = () => {
 
  return (
    <section
      className='w-full bg-black/95 overflow-hidden relative grid place-items-center text-white'>
      <div
        className='flex justify-center text-6xl font-bold max-lg:flex-col max-lg:px-[2vw]'>
        <div className=' w-72 mt-20 self-start'>Crypto Exchange</div>
        <Image
          src={heroImg}
          alt={"Crypto Exchange App"}
          className={"max-w-xl max-lg:w-full"}
        />
        <div className=' w-[170px] mb-20 self-end text-right max-lg:w-full'>
          Made Easy
        </div>
      </div>
      <p className='text-center max-w-lg self-baseline px-4 mb-4'>
        Ezyswap enables you to sell your crypto and receive Naira instantly. No
        waits or delays!
      </p>
    </section>
  );
};

export default Hero;
