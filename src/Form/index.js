import Select from "./Select";
import Result from "./Result";
import React, { useState } from 'react';
import Clock from "./Clock";
import { FormStyled, Fieldset, Legend, Button } from "./styled";

const Form = ({ result, calculateResult }) => {

  const [quantity, setQuantity] = useState("");
  const [selectCurrency, setSelectCurency] = useState("EUR")

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
        <Clock />
        <Select
          quantity={quantity}
          setQuantity={setQuantity}
          selectCurrency={selectCurrency}
          setSelectCurency={setSelectCurency}
        />
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