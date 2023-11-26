import React, { useState, useEffect } from "react";
import { getCryptoPrices } from "../api/axios";

const ConverterSection = ({
  title,
  options,
  type,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  const filteredOptions =
    options && options.filter((option) => option.type === type);

  return (
    <div className='w-full bg-primary text-white max-w-2xl mx-auto py-4 px-4 rounded-lg'>
      <div className='flex justify-between items-center mb-2'>
        <p>{title}</p>
      </div>
      <div className='flex gap-4 max-md:gap-2'>
        <input
          value={amount}
          onChange={onChangeAmount}
          type='number'
          className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        />
        <select
          className='w-[35%] min-w-[130px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
          onChange={onChangeCurrency}>
          <option>Select {type === "fiat" ? "Currency" : "Coin"}</option>
          {filteredOptions?.map((option, i) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Converter = () => {
  const [data, setData] = useState(null);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const calcExchangeRate = () => {
    const fromExchangeRate = fromCurrency / toCurrency;
    const toExchangeRate = toCurrency / fromCurrency;

    return {
      fromExchangeRate,
      toExchangeRate,
    };
  };

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = calcExchangeRate().toExchangeRate * fromAmount;
  } else {
    toAmount = amount;
    fromAmount = calcExchangeRate().toExchangeRate / toAmount;
    console.log(fromAmount);
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
    console.log(amountInFromCurrency);
  }

  useEffect(() => {
    const getData = () => {
      try {
        getCryptoPrices().then((res) => {
          setData(Object.values(res.rates));
        });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <ConverterSection
        title={"From"}
        type={"crypto"}
        options={data}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <ConverterSection
        title={"To"}
        type={"fiat"}
        options={data}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
};

export default Converter;
