import { SelectStyled, Input, Option, State, StyledLoading } from "./styled";
import { useDataApi } from "../../DataAPI/useDataApi"
import { AiFillBank } from "react-icons/ai"
import Loading from "../../DataAPI/Loading"
const Select = ({
  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {

  const { dataApi } = useDataApi();

  return (
    <div>
      
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
      <p>
        {dataApi.state === "loading" ?
          <StyledLoading>{Loading}</StyledLoading>
          :
          dataApi.state === "succes" ?
            (<State>
              Kursy walut pochodzą z NBP na dzień 
            </State>)
            :
            (<State>
              UPS coś poszło nie tak zobacz czy masz połączenie z internetem
               </State>)
        }
        <State date>
              <AiFillBank/>&nbsp;{" "}
          {dataApi.date}
          
        </State>
      </p>
    </div >

  );
};
export default Select;