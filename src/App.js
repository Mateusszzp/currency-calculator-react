import Form from "./Form";
import Footer from "./Footer";
import React, { useState } from 'react'
import { useDataApi } from "./DataAPI/useDataApi"

function App() {
  const [result, setResult] = useState();
  const { dataApi } = useDataApi()
  const calculateResult = (selectCurrency, quantity) => {
    const rate = dataApi.rates[selectCurrency]

    setResult({
      sourceAmount: +quantity,
      targetAmount: quantity * rate,
      showRate: 1 / rate,
      selectCurrency,
    });
  };
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
