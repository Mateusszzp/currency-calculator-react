import { SelectStyled, Input, Option } from "./styled";
import { useDataApi } from "../../useDataApi"


const Select = ({
  currency,
  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {
    
    const {post} = useDataApi();
   
 
    console.log(post)
   

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
          {Object.keys(post).map((currenc) => (
            <option
             key={currenc}
             value={currenc}>
              {currenc}
            </option>
          ))};
        </Option>
      </p>
     
    </div>
  );
};
export default Select;