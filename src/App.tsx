import "flowbite/dist/flowbite.css";
import React, { useState } from "react";
import NumericInput from "./components/input";
import CurrencyDropdown from "./components/dropdown";
import Result from "./components/result";


const App = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };

  return (
    <div className="p-4">

    <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold mb-4">Currency Converter</h1>

        <div className="mb-4 flex justify-center w-full"> {/* Flex container to center NumericInput */}
            <NumericInput value={amount} onChange={handleAmountChange} />
        </div>
    </div>
    
    <div className="mb-4 flex items-center justify-center">
        <CurrencyDropdown
          selectedCurrency={currency}
          onCurrencyChange={handleCurrencyChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>

        <CurrencyDropdown
          selectedCurrency={currency}
          onCurrencyChange={handleCurrencyChange}
        />
    </div>
   

<div  className = 'flex flex-col items-center justify-center '>

<Result  />

</div>
   
</div>
  );
};

export default App;
