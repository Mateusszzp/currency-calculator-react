import styled from "styled-components";

export const FormStyled  = styled.form`
   max-width: 700px;
   padding: 250px 30px;
   margin: 0 auto;
   overflow: auto;
   @media (max-width: 768px){
      max-height: 987px;
   }
`;
export const Fieldset = styled.fieldset`
   border: 1px solid ${({theme}) => theme.colors.doveGray};
   border-radius: 20px;
   padding: 20px;
   box-shadow: 6px -6px 10px -1px ${({theme}) => theme.colors.shadow};
   background-color: #fbfdfc;
   font-size: 23px;
   opacity: 0.9;
`;
export const Legend = styled.legend`
   border: 1px solid ${({theme}) => theme.colors.turquoise};
   border-radius: 8px;
   background: ${({theme}) => theme.colors.turquoise};
   padding: 5px;
   box-shadow: ${({theme}) => theme.colors.shadow} 2.4px 2.4px 3.2px;
`;
export const Button = styled.button`
   width: 100%;
   max-width: 100%;
   border: none;
   color: black;
   background: ${({theme}) => theme.colors.turquoise};
   padding: 10px;
   border-radius: 8px;
   box-shadow: 6px -6px 10px -1px ${({theme}) => theme.colors.shadow};
   font-size: 23px;
 &:hover {
   filter:brightness(110%);
    }
 &:active {
    filter:brightness(115%);
    }

`;

