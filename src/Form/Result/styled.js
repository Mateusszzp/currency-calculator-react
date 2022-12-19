import styled, { css } from "styled-components";

export const ResultStyled = styled.span`
    display: grid;
    grid-template-rows:auto 2fr auto;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    font-weight:bold;

  ${({ rate }) => rate && css`
    font-size: 15px;
    color:${({ theme }) => theme.colors.midGray};
    font-weight: normal;
  `}
`;

