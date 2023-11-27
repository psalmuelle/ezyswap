import React from "react";
import Header from "../components/Header";

import heroImg from "../assets/ezyswap-mobile-app.png";
import Image from "../components/Image";
import MarketPairTab from "../components/MarketPairTab";
import Converter from "../components/Converter";

function Home() {
  return (
    <div className='font-inter text-grey-800'>
      <Header />
      <main>
        <section className='flex justify-center items-center gap-8 px-[2%] my-8 max-lg:gap-8 max-lg:flex-wrap-reverse max-lg:text-center'>
          <div className='flex flex-col items-start gap-6 max-w-2xl max-lg:items-center'>
            <h1 className='text-6xl font-bold max-md:text-4xl'>
              Streamlined Crypto Exchange — Effortless Trading
            </h1>
            <p>Swap digital assets seamlessly, convert currencies instantly.</p>
            <button className='bg-primary py-3 px-4 text-white rounded-md border text-base hover:bg-primary/80 transition-all shadow'>
              Try Out Demo
            </button>
          </div>
          <Image
            src={heroImg}
            alt={"Crypto Exchange App"}
            className={"block max-w-md max-lg:w-full"}
          />
        </section>
        <hr />
        <section className='py-10 mt-8 mx-auto text-center'>
          <hgroup className='mb-8 max-w-2xl mx-auto'>
            <h1 className='text-4xl font-bold'>
              Get Realtime Prices of Crypto Market Pairs
            </h1>
            <p className='px-10 text-black/90 mt-4'>
              Access up-to-the-minute prices for a wide range of cryptocurrency
              market pairs with our real-time tracking service.
            </p>
          </hgroup>
          <MarketPairTab />
        </section>

        <section className='py-10  mx-auto text-center'>
          <hgroup className='mb-8 max-w-2xl mx-auto'>
            <h1 className='text-4xl font-bold'>
              Convert Cryptocurrency to Fiat Currency
            </h1>
            <p className='px-10 text-black/90 mt-4'>
              Effortlessly convert your cryptocurrency holdings into fiat
              currency with our conversion tool. Seamlessly navigate between
              digital assets and traditional currencies.
            </p>
          </hgroup>
          <div>
            <Converter/>
          </div>
        </section>
      </main>
      <footer className='bg-primary py-2 text-center text-white'>
        <p>&copy; Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Home;
