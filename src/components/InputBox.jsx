import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmoutChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisabled = false, // just a good practice, beacause the default value of Disabled is false.
    currencyDisabled = false,
    className = "",
}) {

    const amountInputId = useId()  // unique id for the different currencies

    return (
        <div className={`bg-white p-3 rounded-lg text-md flex ${className} font-semibold`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    // disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => {
                        const newValue = Number(e.target.value)
                        if (newValue > 0) {
                            onAmoutChange && onAmoutChange(newValue)
                        }
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}>

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}
export default InputBox;
