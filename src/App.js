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
    { id: 1, content: "Euro", rate: 4.6940 },
    { id: 2, content: "Dolar", rate: 4.2375 },
    { id: 3, content: "Funt", rate: 5.5831 },
  ];
  const [quantity, setQuantity] = useState("");
  const [selectCurrency, setSelectCurency] = useState(exchange[0])
  


return (
    <main>
      <Form
        selectCurrency={selectCurrency}
        quantity={quantity}
        exchange={exchange}
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
          quantity={quantity} />}
        button={<Button />}
      />

      <Footer />
    </main>
  );
}

export default App;
