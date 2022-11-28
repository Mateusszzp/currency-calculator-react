import styled, { css } from "styled-components";

export const State = styled.span`
   text-decoration:none;
   color:${({ theme }) => theme.colors.midGray};
   font-size: 15px;
   display:flex;
   justify-content: center;

 ${(props) => props.date && css`
   font-size: 20px;
   color:${({ theme }) => theme.colors.black}
  `}
`;




