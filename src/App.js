import Form from "./Form";
import Footer from "./Footer";
import React, { useState } from 'react'
import exchange from "./exchange"
import { useDataApi } from "./useDataApi"



function App() {
  const [result, setResult] = useState();
  const { post } = useDataApi()
  const calculateResult = (selectCurrency, quantity) => {
    const rate = post.rates[selectCurrency]

    setResult({
      sourceAmount: +quantity,
      targetAmount: quantity / rate,
      selectCurrency,
    });
    console.log(rate)
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
