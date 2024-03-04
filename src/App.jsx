import React, { useId, useState } from "react";

import CurrencyTextBox from "./components/CurrencyTextBox";
import useCurrency from "./hooks/useCurrencyInfo";

function App() {
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(fromCurrency);

  const options = Object.keys(currencyInfo);

  return (
    <>
      {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black p-10"> */}

      <div className="flex flex-col justify-center items-center h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <h1 className="text-3xl font-bold border-b-2 text-white">
          Currency Convertor
        </h1>
        <br />
        <div className="bg-[#fff] p-8 rounded-2xl text-center">
          <CurrencyTextBox
            textBoxLabel="From"
            textBoxName="from"
            amount={amount}
            setAmount={setAmount}
            setCurrency={setFromCurrency}
            selectedCurrency={fromCurrency}
            currencyOptions={options}
            disabledTextBox={false}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-[-1rem]"
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
              setAmount(convertedAmount);
              setConvertedAmount(amount);
            }}
          >
            Swap
          </button>

          <CurrencyTextBox
            textBoxLabel="To"
            textBoxName="to"
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            setCurrency={setToCurrency}
            selectedCurrency={toCurrency}
            currencyOptions={options}
            disabledTextBox={true}
          />
          <br />
          <p>
            <b>
              {" "}
              {amount} {fromCurrency.toUpperCase()}{" "}
            </b>{" "}
            ={" "}
            <b>
              {" "}
              {convertedAmount} {toCurrency.toUpperCase()}
            </b>{" "}
            
          </p>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100%]"
            onClick={() => {
              setConvertedAmount(amount * currencyInfo[toCurrency]);
            }}
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
          <br />
          <br />
          <button className="w-[100%] py-2 px-4 bg-green-500 hover:bg-green-700 font-bold text-white rounded-md"
          onClick={()=>{
            setAmount(0)
            setConvertedAmount(0)
            setFromCurrency("inr")
            setToCurrency("usd")
          }}
          >Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
