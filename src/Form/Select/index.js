import { SelectStyled, Input, Option, State } from "./styled";
import { useDataApi } from "../../DataAPI/useDataApi"
import { AiFillBank } from "react-icons/ai"
const Select = ({
  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {

  const { dataApi } = useDataApi();

  return (
    <div>
      <p>
        <SelectStyled > Wpisz zł* </SelectStyled>
        <Input
          value={quantity}
          onChange={({ target }) => setQuantity(target.value)}
          required
          type="number"
          name="zl"
          min="1"
          step="any"
        />
      </p>
      <p>
        <SelectStyled> Wybierz walute </SelectStyled>
        <Option
          value={selectCurrency}
          onChange={({ target }) => setSelectCurency(target.value)}>
          {dataApi.rates && Object.keys(dataApi.rates).map((currency) => (
            <option
              key={currency}
              value={currency}>
              {currency}
            </option>
          ))};
        </Option>
      </p>
      <p> <State>{dataApi.state}
      </State>
        <State date>{dataApi.date}
          <AiFillBank />
        </State>
      </p>
    </div>

  );
};
export default Select;