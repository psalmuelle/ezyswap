import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMarketPairs } from "../api/axios";
import Image from "./Image";

import Loader from "./Loader";
import MarketPairChart from "./MarketPairChart";

// Function to format the API data
function formatSparkline(prices) {
  const formattedPrices =
    prices &&
    prices[0].sparkline_in_7d.price?.map((val, index) => {
      return {
        name: index,
        price: val,
      };
    });
  return formattedPrices;
}

const MarketPairWidget = ({ baseAsset, tabId }) => {
  const {
    data: marketpair,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["marketpair", tabId],
    queryFn: () =>
      getMarketPairs({
        baseAsset: baseAsset,
      }),
    refetchInterval: 45000,
  });

  const pricePercentage =
    marketpair &&
    marketpair[0].price_change_percentage_1h_in_currency?.toFixed(3);
  let lastUpdated = marketpair && marketpair[0].last_updated;
  lastUpdated = new Date(lastUpdated).toLocaleTimeString();
  const percentageColor =
    pricePercentage < 0 ? "text-red-500" : "text-green-500";

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <Loader />
        <p>An error occured!</p>
      </div>
    );
  }

  return (
    <div className='mx-auto w-[95%] h-full'>
      <div className='my-4 flex justify-between items-center'>
        <div className='flex items-center gap-2 w-fit font-bold p-2'>
          <Image
            src={marketpair[0].image}
            alt={marketpair[0].name}
            width={24}
            height={24}
          />
          <h1>{marketpair[0].name}</h1>
        </div>

        <div className='flex flex-col items-start gap-0.5 w-fit px-2'>
          <p className='font-medium'>
            Price:{" "}
            <span className='font-semibold'>{marketpair[0].current_price}</span>
          </p>
          <p className='font-medium'>
            Price In Last Hour:{" "}
            <span
              className={`${percentageColor} font-semibold`}>{`${pricePercentage}%`}</span>
          </p>
        </div>
      </div>

      <div className='h-[500px] max-md:h-[400px] my-6 mb-0'>
        <MarketPairChart data={formatSparkline(marketpair)} />
      </div>
    
    </div>
  );
};

export default MarketPairWidget;
