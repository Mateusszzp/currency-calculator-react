import "./style.css";

const Result = ({ result }) => (
  <p>
    <strong className="result">
      {result !== undefined && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
          {" "}

          {result.targetAmount.toFixed(2)}&nbsp;{result.selectCurrency}
        </>
      )}
    </strong>
  </p>
);
export default Result