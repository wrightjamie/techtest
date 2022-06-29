import { createGlobalStyle } from "styled-components";

import { Reset } from "./resetStyles";
import { Base } from "./baseStyles";

export const GlobalStyle = createGlobalStyle`
${Reset}
${Base}
`;
