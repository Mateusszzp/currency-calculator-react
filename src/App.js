import Form from "./Form";
import Footer from "./Footer";
import React, {  useState } from 'react'
import exchange from "./exchange"



function App() {
  const [result, setResult] = useState();

  const calculateResult = (selectCurrency, quantity) => {
    const rate = exchange
      .find(({ shortcut }) => shortcut === selectCurrency)
      .rate;

    setResult({
      sourceAmount: +quantity,
      targetAmount: quantity / rate,
      selectCurrency,
    });
  }
 return (
    <main>
      <Form
        result={result}
        calculateResult={calculateResult} />
      <Footer />
    </main>
  );
};

export default App;
