import styled from "styled-components";

export const SelectStyled = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 50px;
`;
export const Input = styled.input`
    border: 1px solid #cccc;
    width: 100%;
    max-width: 250px;
    border-radius: 6px;
    background-color: #d1f6ea;
    padding: 8px;
    box-shadow: 6px -6px 10px -1px rgba(0, 0, 0, 0.75);

&:required {
    border-color: hsl(0, 0%, 40%);
    background: #d1f6ea;
    }
`;

export const Option = styled.select`
    border: 1px solid #cccc;
    width: 100%;
    max-width: 250px;
    border-radius: 6px;
    background-color: #d1f6ea;
    padding: 8px;
    box-shadow: 6px -6px 10px -1px rgba(0, 0, 0, 0.75)
`;
