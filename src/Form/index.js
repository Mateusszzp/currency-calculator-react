import "./style.css";
import ExchangeRate from "./ExchangeRate";
import Select from "./Select";
import Result from "./Result";
import exchange from "../exchange";
import React, { useState } from 'react';
import Clock from "./Clock"



const Form = ({ result, calculateResult }) => {


  const [quantity, setQuantity] = useState("");
  const [selectCurrency, setSelectCurency] = useState(exchange[0].shortcut)

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectCurrency, quantity);
    setQuantity("")

  };
  return (
    <form
      onSubmit={onFormSubmit}
      className="js-form  form"
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut
        </legend>
        <Clock
         />
        <Select
          quantity={quantity}
          setQuantity={setQuantity}
          currency={exchange}
          selectCurrency={selectCurrency}
          setSelectCurency={setSelectCurency}
        />
        <ExchangeRate/>
        <Result
          result={result}
          selectCurrency={selectCurrency}
        />
      </fieldset>
      <p>
        <button
          className="form__button"
        >
          Przelicz
        </button>
      </p>
    </form>
  )

};
export default Form;