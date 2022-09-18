import "./style.css";



const Form = ({ setCurrencyName, setResult, title, body,
  exchangeRate, result, button, quantity, currency, }) => {


  const onFormSubmit = (event) => {
    event.preventDefault();
    const isResult = quantity / currency.rate
    setResult(isResult.toFixed(2));

    const currencyName = currency.shortcut
    setCurrencyName(currencyName);
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
        {exchangeRate}
        {result}
      </fieldset>
      {button}
    </form>
  )

};
export default Form;