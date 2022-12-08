import { SelectStyled, Input, Option } from "./styled";
import { useDataApi } from "../../useDataApi"
import { State } from "../../styledState"
import { AiFillBank } from "react-icons/ai"
const Select = ({

  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {

  const { post } = useDataApi();

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
          {post.rates && Object.keys(post.rates).map((currency) => (
            <option
              key={currency}
              value={currency}>
              {currency}
            </option>
          ))};
        </Option>
      </p>
      <p> <State>{post.state}
      </State>
        <State date>{post.date}
          <AiFillBank />
        </State>
      </p>
    </div>

  );
};
export default Select;