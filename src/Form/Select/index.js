import React from 'react'
import { SelectStyled, Input, Option } from "./styled";

const Select = ({
  currency,
  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {

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
          {currency.map((currenc) => (
            <option
              key={currenc.shortcut}
              value={currenc.shortcut}>
              {currenc.name}
            </option>
          ))};
        </Option>
      </p>
    </div>
  );
};
export default Select;