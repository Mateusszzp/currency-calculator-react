import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    max-width: 100%;
    border: none;
    color: ${({theme}) => theme.colors.white};
    background:${({theme}) => theme.colors.black};
    padding: 4px;
    border-radius: 100px;
    text-align: center;
`;