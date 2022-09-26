import "./style.css";
import ExchangeRate from "./ExchangeRate";


const Form = ({ setCurrencyName, setResult, title, body,
  exchangeRate, result, quantity, currency }) => {


  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const isResult = quantity / currency.rate
    setResult(isResult.toFixed(2));

    
    const currencyName = currency.shortcut
    setCurrencyName(currencyName);
    console.log(`${quantity} PLN = ${isResult.toFixed(2)} ${currencyName}`)
  
   
  };

  return (

    <form
      onSubmit={onFormSubmit}
      className="js-form  form"
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          {title}
        </legend>
        {body}
        <ExchangeRate/>
        {result}
        </fieldset>
      <p>
      <button
        className="form__button"
      >
        Przelicz
      </button>
    </p>
    </form>
  )

};
export default Form;