import styled from "styled-components";
import { flow } from "./utils/utility";

export const PostContent = styled.article`
  background-color: var(--white);
  ${flow};
  * {
    padding: var(--gap);
  }
`;
