import Form from "./Form";
import Footer from "./Footer";
import React, { useState } from 'react'
import { useDataApi } from "./useDataApi"

function App() {
  const [result, setResult] = useState();
  const { post } = useDataApi()
  const calculateResult = (selectCurrency, quantity) => {
    const rate = post.rates[selectCurrency]

    setResult({
      sourceAmount: +quantity,
      targetAmount: quantity * rate,
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
