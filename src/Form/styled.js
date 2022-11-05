import styled from "styled-components";

export const FormStyled  = styled.form`
   max-width: 700px;
   padding: 250px 50px;
   margin: 0 auto;
   overflow: auto;
`;
export const Fieldset = styled.fieldset`
   border: 1px solid #cccc;
   border-radius: 20px;
   padding: 20px;
   box-shadow: 6px -6px 10px -1px rgba(0, 0, 0, 0.75);
   background-color: #fbfdfc;
   font-size: 23px;
   opacity: 0.9;
`;
export const Legend = styled.legend`
   border: 1px solid #cccc;
   border-radius: 8px;
   background-color: #22f3b1;
   padding: 5px;
   box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
export const Button = styled.button`
   width: 100%;
   max-width: 100%;
   border: none;
   color: black;
   background-color: #22f3b1;
   padding: 10px;
   border-radius: 8px;
   box-shadow: 6px -6px 10px -1px rgba(0, 0, 0, 0.75);
   font-size: 23px;
 &:hover {
    background-color: hsl(161, 90%, 65%);
    }
 &:active {
    background-color: hsl(161, 90%, 80%);
    }

`;

