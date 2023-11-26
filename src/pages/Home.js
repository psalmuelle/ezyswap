import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import MarketPairWidget from "../components/MarketPairWidget";

import Image from "../components/Image";
function Home() {
  return (
    <div className='font-inter bg-white'>
      <Header />
      <main>
      <Hero/>

        <section className="py-10 max-w-2xl mx-auto text-center">
          <hgroup>
          <h1 className="text-4xl font-bold">Get Realtime Prices of Crypto Market Pairs</h1>
          <p className="px-10 text-black/90">Access up-to-the-minute prices for a wide range of cryptocurrency market pairs with our real-time tracking service.</p>

          </hgroup>
          <MarketPairWidget baseAsset={'BTC'} quoteAsset={'USDT'}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
