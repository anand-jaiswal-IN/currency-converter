import React, { memo } from "react";

function CurrencyTextBox({
  textBoxLabel,
  textBoxName,
  amount,
  setAmount = 0,
  setCurrency,
  selectedCurrency,
  currencyOptions = [],
  disabledTextBox = false,
}) {
  return (
    <>
      <div className="w-[100%] border-[#5c5c5c34] border-2 flex p-4 rounded-md shadow-sm">
        <div className="w-1/2 text-left">
          <label htmlFor={textBoxName}>{textBoxLabel} : </label>
          <br />
          <input
            type="number"
            name={textBoxName}
            placeholder="Amount"
            value={amount}
            className="bg-transparent w-[100%] outline-none py-2"
            onChange={(e) => setAmount && setAmount(e.target.value)}
            disabled={disabledTextBox}
          />
        </div>
        <div className="w-1/2 text-right">
          <label htmlFor="currency-type">Currency Type : </label>
          <br />
          <select
            name="currency"
            onChange={(e) => setCurrency && setCurrency(e.target.value)}
            value={selectedCurrency}
            className="p-2 my-1 rounded-md"
          >
            {currencyOptions.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default memo(CurrencyTextBox);
