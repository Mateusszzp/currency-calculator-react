import "./index.css"
import Result from "./Result";
import Button from "./Button";
import Select from "./Select";
import ExchangeRate from "./ExchangeRate";
import Form from "./Form";
import Footer from "./Footer";
import React, { useState } from 'react';


function App() {

  const exchange = [
    { id: 1, content: "Euro", rate: 4.6940, shortcut: "EUR" },
    { id: 2, content: "Dolar Amerykański", rate: 4.2375, shortcut: "USD" },
    { id: 3, content: "Funt Brytyjski", rate: 5.5831, shortcut: "GBP" },
    { id: 4, content: "Kuna Chorwacka", rate: 0.6269, shortcut: "HRK" },
  ];

  const [currencyName, setCurrencyName] = useState(0)
  const [quantity, setQuantity] = useState("");
  const [selectCurrency, setSelectCurency] = useState(exchange[0].content)
  const [isResult, setResult] = useState("")

  const currency = exchange.find((currency) => currency.content === selectCurrency);


  return (

    <main>
      <Form
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
        setResult={setResult}
        currency={currency}
        selectCurrency={selectCurrency}
        quantity={quantity}
        title="Kalkulator walut"
        body={<Select
          quantity={quantity}
          setQuantity={setQuantity}
          currency={exchange}
          selectCurrency={selectCurrency}
          setSelectCurency={setSelectCurency}
        />}
        exchangeRate={<ExchangeRate />}
        result={<Result
          quantity={quantity}
          currencyName={currencyName}
          isResult={isResult}
          selectCurrency={selectCurrency}
        />}
        button={<Button
        />}
      />
      <Footer />
    </main>
  );
};

export default App;
