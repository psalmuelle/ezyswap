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
    <div className='w-full max-w-xl h-[500px] rounded-xl overflow-hidden shadow-lg flex flex-col'>
      <nav className='px-2 rounded-xl rounded-b-none border-b border-[#eee] h-11'>
        <ul className='flex w-full list-none'>
          {pairs.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedTab(item)}
              className={` rounded-md border-b-0 w-full py-3 px-5 relative bg-white cursor-pointer h-8  ${
                item === selectedTab ? "bg-[#eee]" : ""
              }`}>
              {`${item.baseAsset}/${item.quoteAsset}`}
              {item === selectedTab ? (
                <motion.div
                  className='absolute bottom-[1px] left-0 right-0 h-0.5 bg-primary'
                  layoutId='underline'
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className='select-none flex justify-center items-center grow'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.id : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
            {selectedTab ? (
              <MarketPairWidget
                baseAsset={selectedTab.baseAsset}
                quoteAsset={selectedTab.quoteAsset}
              />
            ) : (
              ""
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
