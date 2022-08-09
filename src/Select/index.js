import "./style.css";

const Select = (props) => (
    <div>
        <p>
            <span className="select"> Wpisz zł* </span>
            <input required className="select__input" 
						type="number" name="zl" min="1" step="any" />
        </p>
        <p>
            <span className="select"> Wybierz walute</span>
            <select className="setCurrency" name=" currency" 
						list="currency">
                {props.currency.map(currenc => (
                    <option key={currenc.id}>
                        {currenc.content}
                    </option>
                ))}
            </select>
        </p>
    </div>
)
export default Select;