import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMarketPairs } from "../api/axios";

import Loader from "./Loader";
import MarketPairChart from "./MarketPairChart";

// Function To Get ISO Time Format
const getIsoTime = () => {
  const currentDate = new Date();
  const twentyFourHoursAgo = new Date(
    currentDate.getTime() - 12 * 60 * 60 * 1000
  );

  const timeStart = twentyFourHoursAgo.toISOString();
  const timeEnd = currentDate.toISOString();
  return {
    timeStart,
    timeEnd,
  };
};



const MarketPairWidget = ({ baseAsset, quoteAsset }) => {

  
  useEffect(()=> {
  }, [])
  
  const {
    data: marketpair,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["marketpair"],
    queryFn: () =>
      getMarketPairs({
        baseAsset: baseAsset,
        quoteAsset: quoteAsset,
        timeStart: getIsoTime().timeStart,
        timeEnd: getIsoTime().timeEnd,
      }),
      refetchOnMount: false
   // refetchInterval: 60000,
  });

  const currentPrice = marketpair && marketpair[marketpair?.length-1]['rate_close'];

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
    <div className='mx-auto w-[90%] h-full'>
      <h1 className="text-xl font-medium  text-left my-2">
        Pair: <span className="font-semibold">{baseAsset} / {quoteAsset}</span> 
      </h1>
      <p className="text-lg text-left">Current Price: <span className="font-bold">{currentPrice}</span></p>
      <div className="h-[500px]">
      <MarketPairChart data={marketpair} />
      </div>
    </div>
  );
};

export default MarketPairWidget;
