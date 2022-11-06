import {createGlobalStyle} from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

  #root {
  font-family: 'Roboto Slab', serif;
  background-image:url("${background}");
  background-size: 200px;
  background-attachment: fixed;
  background-repeat: space;
  }
`;