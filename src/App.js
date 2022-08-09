import "./index.css"
import Result from "./Result";
import Button from "./Button";
import Select from "./Select";
import ExchangeRate from "./ExchangeRate";

const exchange = [
  { id: 1, content: "Euro" },
  { id: 2, content: "Dolar" },
  { id: 3, content: "Funt", done: false },
];


function App() {
  return (
    <main>
      <form className="js-form  form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Kalkulator walut
          </legend>
          <Select
            currency={exchange}
          />
          <ExchangeRate />
          <Result />
        </fieldset>
        <Button />
      </form>
      <footer className="footer">Wykonano w ramach zadania YouCode@ Mateusz Paśko</footer>
    </main>
  );
}

export default App;
