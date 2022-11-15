import ExchangeRate from "./ExchangeRate";
import Select from "./Select";
import Result from "./Result";
import exchange from "../exchange";
import React, { useState } from 'react';
import Clock from "./Clock";
import { FormStyled, Fieldset, Legend, Button } from "./styled";

const Form = ({ result, calculateResult }) => {


  const [quantity, setQuantity] = useState("");
  const [selectCurrency, setSelectCurency] = useState(exchange[0].shortcut)
  

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectCurrency, quantity);
    setQuantity("")
  
  };
  return (
    
    <FormStyled
      onSubmit={onFormSubmit}
    >
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <Clock/>
        <Select
          quantity={quantity}
          setQuantity={setQuantity}
          currency={exchange}
          selectCurrency={selectCurrency}
          setSelectCurency={setSelectCurency}
        />
        <ExchangeRate />
        <Result
          result={result}
          selectCurrency={selectCurrency}
        />
      </Fieldset>
      <p>
        <Button>
          Przelicz
        </Button>
      </p>
    </FormStyled>
  )
};
export default Form;