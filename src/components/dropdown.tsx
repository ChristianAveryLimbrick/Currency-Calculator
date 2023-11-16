import React, { useState } from "react";

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = ["USD", "EUR", "GBP", "JPY", "CAD"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCurrency = (currencies: string) => {
    setSelectedCurrency(currencies);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedCurrency}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path d="M5 8l5 5 5-5" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          >
          <div className="py-1" role="none">
            {currencies.map((currency) => (
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${currency}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectCurrency(currency);
                }}
                key={currency}
              >
                {currency}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
