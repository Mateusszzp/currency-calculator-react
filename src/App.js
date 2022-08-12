import "./index.css"
import Result from "./Result";
import Button from "./Button";
import Select from "./Select";
import ExchangeRate from "./ExchangeRate";
import Form from "./Form";
import Footer from "./Footer";


const exchange = [
  { id: 1, content: "Euro", rate: 4.6940 },
  { id: 2, content: "Dolar", rate: 4.2375 },
  { id: 3, content: "Funt", rate: 5.5831 },
];


function App() {

 
  
  
  return (
    <main>
      <Form
        title="Kalkulator walut"
        body={<Select quantity={quantity}
          currency={exchange}
        />}
        exchangeRate={<ExchangeRate />}
        result={<Result/>}
        button={<Button/>}
      />
      
      <Footer/>
    </main>
  );
}

export default App;
