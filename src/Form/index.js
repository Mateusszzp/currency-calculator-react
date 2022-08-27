import "./style.css";



const Form = ({ title, body, exchangeRate, result, button, quantity,exchange, selectCurrency }) => {

    
    const onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(quantity /selectCurrency.rate);
        alert(quantity /selectCurrency.rate)
    };
    return (
        <form className="js-form  form"
        onSubmit={onFormSubmit}>
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