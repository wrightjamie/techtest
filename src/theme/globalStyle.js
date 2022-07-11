import { createGlobalStyle } from "styled-components";

import { Reset } from "./resetStyles";
import { Base } from "./baseStyles";
import { Variables } from "./cssVariables";

export const GlobalStyle = createGlobalStyle`
${Reset}
${Variables}
${Base}
`;
