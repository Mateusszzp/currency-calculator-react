import styled, { css } from "styled-components";

export const SelectStyled = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 50px;
`;
export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.doveGray};
    width: 100%;
    max-width: 250px;
    border-radius: 6px;
    background:${({ theme }) => theme.colors.grannyApple};
    padding: 8px;
    box-shadow: 6px -6px 10px -1px ${({ theme }) => theme.colors.shadow};

  &:required {
    border-color: hsl(0, 0%, 40%);
    background: #d1f6ea;
    }
`;

export const Option = styled.select`
    border: 1px solid ${({ theme }) => theme.colors.doveGray};
    width: 100%;
    max-width: 250px;
    border-radius: 6px;
    background:${({ theme }) => theme.colors.grannyApple};
    padding: 8px;
    box-shadow: 6px -6px 10px -1px ${({ theme }) => theme.colors.shadow};
`;

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

export const StyledLoading = styled.span`
    display: flex;
    justify-content: center;
`;

