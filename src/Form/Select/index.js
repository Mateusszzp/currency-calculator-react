import React from 'react'
import { SelectStyled, Input, Option } from "./styled";
import axios from "axios"
import { useEffect, useState } from 'react'


const Select = ({
  currency,
  quantity,
  setQuantity,
  selectCurrency,
  setSelectCurency }) => {
    const [post, setPost] = useState(null);
 
useEffect(() => {
  axios.get('https://api.exchangerate.host/latest')
  .then((response) => {
    setPost(response.data);
  })
 },[]);

if (!post) return null;
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