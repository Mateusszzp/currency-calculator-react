import "./style.css";



const Select = ({ currency, quantity, setQuantity, }) => {




  return (

    <div>
      <p>
        <span className="select"> Wpisz zł* </span>
        <input
          value={quantity}
          onChange={({ target }) => setQuantity(target.value)}
          required
          className="enterAmount"
          type="number"
          name="zl"
          min="1"
          step="any"
        />
      </p>
      <p>
        <span
          className="select"> Wybierz walute
        </span>
        <select
          className="setCurrency"
          name=" currency"
          list="currency">
          {currency.map(currenc => (
            <option
              key={currenc.id}>
              {currenc.content}
            </option>
          ))}
        </select>
      </p>
    </div>
  
  );

};


export default Select;