import "./style.css";

const Result = ({ isResult, currencyName, quantity }) => (

    <p>

        <strong className="formResult">  {quantity} PLN = {isResult} {currencyName} </strong>

    </p>

);

export default Result