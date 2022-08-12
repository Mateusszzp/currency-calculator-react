import "./style.css";



const Form = ({ title, body, exchangeRate, result, button }) => {

    
    const onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(`Wartośc wypisana w polu:${quantity}`)
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