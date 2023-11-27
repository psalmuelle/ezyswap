import { useState } from "react";
import MarketPairWidget from "./MarketPairWidget";
import { motion, AnimatePresence } from "framer-motion";

export default function MarketPairTab() {
  const pairs = [
    {
      id: "1",
      baseAsset: "BTC",
      quoteAsset: "USDT",
    },
    {
      id: "2",
      baseAsset: "ETH",
      quoteAsset: "USDT",
    },
    {
      id: "3",
      baseAsset: "TRON",
      quoteAsset: "USDT",
    },
    {
      id: "4",
      baseAsset: "BNB",
      quoteAsset: "USDT",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(pairs[0]);

  return (
    <div className='w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col'>
      <nav className='px-2 rounded-xl rounded-b-none border-b border-[#eee] py-2'>
        <ul className='flex w-full list-none'>
          {pairs.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setSelectedTab(item)}
                className={` rounded-md w-full py-3 px-5 relative bg-white cursor-pointer ${
                  item.id === selectedTab.id ? "bg-primary/5" : ""
                }`}>
                {`${item.baseAsset}/${item.quoteAsset}`}
                {item.id === selectedTab.id ? (
                  <motion.div
                    className='absolute bottom-[1px] left-0 right-0 h-0.5 bg-primary'
                    layoutId='underline'
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
      <main className='select-none  w-full h-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.id : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
              <MarketPairWidget
                baseAsset={selectedTab.baseAsset}
                quoteAsset={selectedTab.quoteAsset}
              />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
